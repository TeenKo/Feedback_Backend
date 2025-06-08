// src/routes/feedbackRoute.js
import express from 'express';
import { sendFeedbackEmail } from '../services/emailService.js';
import logger from '../utils/logger.js';

const router = express.Router();

/**
 * @route GET /feedback
 * @desc Sends a feedback email based on the provided message.
 * @param {string} message - The feedback message from the query string.
 * @returns {object} 200 - Success response with { success: true, message: string }
 * @returns {object} 400 - Error response if message is missing or invalid
 * @returns {object} 500 - Error response if email sending fails
 */
router.get('/feedback', async (req, res) => {
  const { message } = req.query;

  if (!message || typeof message !== 'string' || message.trim() === '') {
    logger.warn('Missing or invalid message parameter');
    return res.status(400).json({ error: 'Message parameter is required' });
  }

  try {
    const result = await sendFeedbackEmail(message.trim());
    res.status(200).json(result);
  } catch (error) {
    logger.error('Route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;