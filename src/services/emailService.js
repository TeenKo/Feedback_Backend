// src/services/emailService.js
/**
 * @fileoverview Service for handling email operations, specifically feedback sending.
 * @author [Michael Letuchev]
 */

import nodemailer from 'nodemailer';
import { ENV } from '../config/env.js';
import logger from '../utils/logger.js';

/**
 * Configures the Nodemailer transporter for Gmail.
 * @type {nodemailer.Transporter}
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ENV.EMAIL,
    pass: ENV.APP_PASSWORD,
  },
});

/**
 * Sends a feedback email to the configured recipient.
 * @async
 * @function sendFeedbackEmail
 * @param {string} feedback - The feedback message to send.
 * @returns {Promise<Object>} Object with { success: true, message: string }
 * @throws {Error} If email sending fails.
 */
export const sendFeedbackEmail = async (feedback) => {
  try {
    const mailOptions = {
      from: ENV.EMAIL,
      to: ENV.EMAIL,
      subject: ENV.MAIL_TITLE,
      text: feedback,
      encoding: 'utf-8',
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(`Email sent: ${info.response}`);
    return { success: true, message: 'Feedback successfully sent' };
  } catch (error) {
    logger.error('Error sending email:', error);
    throw new Error('Failed to send feedback email');
  }
};