// src/app.js
/**
 * @fileoverview Main application setup with Express middleware and routes.
 * @author [Michael Letuchev]
 */

import express from 'express';
import feedbackRoute from './routes/feedbackRoute.js';

const app = express();

/**
 * Middleware to parse JSON and URL-encoded bodies.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Mounts the feedback route under /api.
 */
app.use('/api', feedbackRoute);

export default app;