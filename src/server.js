// src/server.js
/**
 * @fileoverview Main server file to start the feedback application.
 * @author [Michael Letuchev]
 */

import app from './app.js';
import { ENV } from './config/env.js';
import logger from './utils/logger.js';

/**
 * Starts the Express server on the specified port.
 * @async
 * @function startServer
 * @throws {Error} If the server fails to start.
 */
const startServer = async () => {
  try {
    app.listen(ENV.PORT, () => {
      logger.info(`Server running on http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();