# Netflix Login Clone

A Netflix-inspired login application built using **React, Vite, Node.js, and Express.js**.

## Features

- Netflix-style responsive login UI
- Email and password form handling
- Frontend form validation
- Backend validation with Express
- Axios API integration
- Mock/static authentication
- Error handling for invalid credentials
- Loading state during login
- Dashboard after successful login
- Logout functionality
- Environment variables using `.env`

## Tech Stack

- React.js
- Vite
- Axios
- Node.js
- Express.js
- CSS
- Git & GitHub
- Vercel

## Project Structure

```text
netflix-login/
├── frontend/
│   ├── src/
│   └── .env
│
├── backend/
│   ├── server.js
│   └── .env
│
└── README.md
````

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

## Environment Variable

Frontend `.env`:

```env
VITE_API_URL=http://localhost:5000
```

Backend `.env`:

```env
PORT=5000
```

## Demo Credentials

```text
Email: demo@gmail.com
Password: 123456
```

## API

```text
POST /api/login
```

The backend checks the submitted credentials against mock user data and returns success or an error response.

## Deployment

* Source code hosted on GitHub
* Frontend and backend can be deployed using Vercel
* Production API URL is configured through environment variables

```
