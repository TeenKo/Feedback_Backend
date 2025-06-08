# Feedback Backend for Unity Demo

This is a Node.js backend application designed to handle feedback submissions from a Unity game demo. The backend receives feedback via a GET request, sends it as an email to a configured Gmail address, and logs the process.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Logging](#logging)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Receives feedback via GET request.
- Sends feedback as an email using Nodemailer with Gmail.
- Configurable email subject via environment variables.
- Robust logging with Winston.
- Modular and maintainable code structure.

## Prerequisites
- Node.js (LTS version recommended, e.g., 18.x or 20.x)
- npm (comes with Node.js)
- Gmail account with app-specific password (2FA required)

## Installation
1.Initialize a Node.js project
```bash
npm init -y
```
2.Install dependencies:
```bash
npm install express nodemailer dotenv winston
```
3.Install development dependency (optional):
```bash
npm install --save-dev nodemon
```

## Configuration
- Create a .env file in the root directory with the following variables:
```
EMAIL=your-email@gmail.com
APP_PASSWORD=your-app-specific-password
PORT=3000
LOG_LEVEL=info
MAIL_TITLE=Custom Feedback Title
```
    - EMAIL: Your Gmail address.
    - APP_PASSWORD: App-specific password generated via Google Account security settings.
    - PORT: Server port (default: 3000).
    - LOG_LEVEL: Logging level (e.g., 'info', 'error', default: 'info').
    - MAIL_TITLE: Subject line for feedback emails (default: 'New feedback from demo' if not set).

Add .env to .gitignore to prevent committing sensitive data.

## Usage
1.Start the server:
```bash
npm start
```
2.Test the endpoint with a GET request:
```bash
curl "http://localhost:3000/api/feedback?message=Test feedback"
```

## API Endpoints
- GET /api/feedback
    - Description: Sends a feedback email.
    - Query Parameter: message (string, required) - The feedback text.
    - Success Response: 200 - { success: true, message: "Feedback successfully sent" }
    - Error Responses:
        - 400 - { error: "Message parameter is required" } (if message is missing or invalid)
        - 500 - { error: "Internal server error" } (if email sending fails)

## Logging
- Logs are stored in combined.log and error.log in the root directory.
- In development mode, logs are also output to the console.

## Development
- Run in development mode with auto-restart:
```bash
npm run dev
```
- Add tests or enhance features as needed.

## Deployment
- Deploy to a platform like Heroku, Render, or a VPS. Configure environment variables in the deployment environment.

## Contributing
- Feel free to submit issues or pull requests. Please follow the existing code style.