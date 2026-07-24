# Technology Decision Record

## Backend
Node.js with Express.js

Reason:
- Fast development
- Lightweight
- Large community support

## Caching
In-memory cache

Reason:
- Faster repeated requests
- Reduces unnecessary network calls

## Rate Limiting
Express Rate Limit

Reason:
- Prevents API abuse
- Improves server stability

## Alternative Technologies Considered
- Fastify (rejected because Express is simpler)
- Redis Cache (rejected for this small assignment due to extra setup)