// src/utils/logger.js
/**
 * @fileoverview Logger utility using Winston for logging application events.
 * @author [Michael Letuchev]
 */

import winston from 'winston';
import { ENV } from '../config/env.js';

/**
 * Configures and returns a Winston logger instance.
 * @type {winston.Logger}
 */
const logger = winston.createLogger({
  level: ENV.LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export default logger;