Full-Stack Landing Page with Microservices
This project is a complete full-stack web application featuring a modern frontend built with Vite and React, and a robust backend designed with a microservices architecture.

🚀 Live Demo
The frontend of this application is deployed and live on Vercel.

Visit the Live Site here https://landing-page-ten-iota-89.vercel.app/

✨ Features
Fast Frontend: Built with Vite and React for a lightning-fast development experience and optimized performance.

Microservices Backend: The backend is decoupled into individual services for authentication, user management, and analytics, all managed by an API Gateway.

JWT Authentication: Secure endpoints using JSON Web Tokens.

Scalable Architecture: The microservice pattern allows for independent development, deployment, and scaling of each part of the backend.

🛠️ Tech Stack
Frontend: Vite, React

Backend: Node.js, Express.js

Authentication: JSON Web Token (JWT)

API Gateway: Custom gateway using Node.js and Express

Deployment: Vercel

🏛️ Project Architecture
The application is split into a frontend and a backend directory. The backend itself is composed of multiple independent services:

/frontend: Contains the Vite + React single-page application.

/backend/gateway: The main entry point for all API requests. It authenticates requests and routes them to the appropriate microservice.

/backend/auth: Handles user login and JWT generation.

/backend/user: Manages user profile data.

/backend/analytics: Provides summary data and application analytics.

⚙️ Getting Started & Running Locally
To run the frontend of this project on your local machine, follow these steps.

Prerequisites
Node.js (v18 or newer recommended)

npm or yarn

Installation & Setup
Clone the repository:

git clone [https://github.com/hitensj/landing_page.git](https://github.com/hitensj/landing_page.git)
cd landing_page

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Run the development server:

npm run dev

This will start the Vite development server, typically at http://localhost:5173. Open this URL in your browser to see the application.

Note: The backend services are included in the repository but require separate setup and running of each service (gateway, auth, user, analytics). This README focuses on the deployed frontend.
