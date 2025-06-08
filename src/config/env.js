// src/config/env.js
/**
 * @fileoverview Configuration module to load environment variables.
 * @author [Michael Letuchev]
 */

import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: join(__dirname, '../../.env') });

/**
 * Environment configuration object.
 * @typedef {Object} ENV
 * @property {string} EMAIL - Gmail address for sending emails.
 * @property {string} APP_PASSWORD - App-specific password for Gmail.
 * @property {number} PORT - Server port (defaults to 3000).
 * @property {string} LOG_LEVEL - Logging level (defaults to 'info').
 * @property {string} MAIL_TITLE - Subject line for feedback emails (defaults to 'New feedback from demo').
 */
export const ENV = {
  EMAIL: process.env.EMAIL,
  APP_PASSWORD: process.env.APP_PASSWORD,
  PORT: process.env.PORT || 3000,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  MAIL_TITLE: process.env.MAIL_TITLE || 'New feedback from demo',
};

if (!ENV.EMAIL || !ENV.APP_PASSWORD) {
  throw new Error('Missing required environment variables: EMAIL or APP_PASSWORD');
}