# Deployment Guide

## Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (for local development)

## Local Development
1. Clone the repository
2. Copy `.env.example` to `.env` and configure variables
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run start
   ```

## Docker Deployment
1. Build and run using Docker Compose:
   ```bash
   docker-compose up -d
   ```

## Production Deployment
1. Build the Docker image:
   ```bash
   docker build -t movie-api-gateway .
   ```
2. Run the container:
   ```bash
   docker run -d -p 3000:3000 --env-file .env movie-api-gateway
   ```

## Environment Variables
- `PORT`: Application port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

## Health Check
Access `http://localhost:3000/health` to verify the deployment
