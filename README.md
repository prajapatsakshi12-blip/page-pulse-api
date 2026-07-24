# Page Pulse API

## Overview
Page Pulse is a URL audit API that checks website availability, validates URLs, and returns structured audit responses. It is designed with caching, rate limiting, and error handling for reliable performance.

## Features

- URL validation
- Website status checking
- Response time tracking
- In-memory caching for repeated requests
- Rate limiting for API protection
- Structured error responses
- Request logging

## API Endpoints

### Audit Single URL
POST /api/audit

### Audit Multiple URLs
POST /api/audit/batch

### Cache Statistics
GET /api/cache/stats

## Technology Stack

- Node.js
- Express.js
- JavaScript
- REST API

## Architecture

The system follows a modular architecture with separate components for validation, auditing, caching, rate limiting, and logging.

## Future Improvements

- Redis based distributed caching
- Database storage
- Advanced monitoring
- Cloud deployment

## Author

Sakshi Prajapat
