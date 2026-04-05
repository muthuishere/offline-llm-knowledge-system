# Todo App — Complete Installation Guide

## Overview

This guide covers installing, configuring, and running a full-stack Todo application built with React, Node.js, and PostgreSQL. Follow each section in order.

---

## Prerequisites

Before you begin, ensure the following tools are installed on your machine:

| Tool | Minimum Version | Check Command |
|------|----------------|---------------|
| Node.js | 18.x | `node --version` |
| npm | 9.x | `npm --version` |
| PostgreSQL | 14.x | `psql --version` |
| Git | 2.x | `git --version` |

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/example/todo-app.git
cd todo-app
```

The project has two top-level folders:
- `client/` — React frontend (Vite + TypeScript)
- `server/` — Node.js + Express API

---

## Step 2: Install Dependencies

Install backend and frontend dependencies separately:

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

---

## Step 3: Configure Environment Variables

### Backend (`server/.env`)

Create the file:

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```
PORT=3001
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/todos
JWT_SECRET=your-super-secret-jwt-key-change-this
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Frontend (`client/.env`)

```bash
cp client/.env.example client/.env
```

Edit `client/.env`:

```
VITE_API_BASE_URL=http://localhost:3001
```

---

## Step 4: Set Up the Database

### Create the database

```bash
psql -U postgres
```

Inside psql:

```sql
CREATE DATABASE todos;
CREATE USER todo_user WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE todos TO todo_user;
\q
```

### Run migrations

```bash
cd server
npm run migrate
```

This creates the following tables:
- `users` — user accounts with hashed passwords
- `todos` — todo items linked to users
- `tags` — labels that can be applied to todos
- `todo_tags` — many-to-many join table

### (Optional) Seed sample data

```bash
npm run seed
```

Seeds 3 demo users and 20 sample todos for local testing.

---

## Step 5: Start the Application

Open two terminal windows:

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

Server starts on `http://localhost:3001`. You should see:
```
✓ Database connected
✓ Server listening on port 3001
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

Frontend starts on `http://localhost:5173`. Open this in your browser.

---

## Step 6: Verify Installation

1. Open `http://localhost:5173`
2. Click **Sign Up** and create an account
3. Create your first todo item
4. Mark it as complete
5. Check that it persists after a page refresh

---

## Common Issues

### Port already in use

```bash
lsof -ti:3001 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

### Database connection refused

Check PostgreSQL is running:
```bash
brew services list | grep postgresql
brew services start postgresql@14
```

### Migrations fail

Ensure `DATABASE_URL` is correct and the user has the right permissions:
```sql
GRANT ALL ON SCHEMA public TO todo_user;
```

### CORS errors in browser

Verify `CORS_ORIGIN` in `server/.env` matches the exact frontend URL including port.

---

## Running Tests

```bash
# Unit tests
cd server && npm test

# Integration tests (requires test database)
npm run test:integration

# Frontend component tests
cd client && npm test

# E2E tests (Playwright)
npm run test:e2e
```

---

## Deployment

### Docker

```bash
docker-compose up --build
```

### Production environment variables

Set these in your hosting provider:
- `NODE_ENV=production`
- `DATABASE_URL` pointing to your production Postgres instance
- `JWT_SECRET` — a long random string (use `openssl rand -hex 32`)
- `CORS_ORIGIN` — your production frontend URL

---

## Architecture Notes

The backend follows a layered architecture:

```
Request → Router → Middleware → Controller → Service → Repository → Database
```

- **Router** — maps HTTP routes to controllers
- **Middleware** — auth checks, validation, rate limiting
- **Controller** — handles HTTP request/response, delegates to service
- **Service** — business logic, orchestrates repositories
- **Repository** — raw database queries (using `pg` driver directly)

Authentication uses JWT tokens with a 24-hour expiry. Refresh tokens are not implemented in v1.

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes following Conventional Commits
4. Open a pull request against `main`

All PRs require at least one review and CI passing before merge.
