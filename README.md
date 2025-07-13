# Webalar Task Management App 🧠📋

A full-stack MERN application for managing tasks with user authentication, JWT-based login, and role-based task handling.

## 🚀 Features

- 🔐 User Registration & JWT Authentication
- ✅ Login & Protected Routes
- 🗂️ CRUD operations for Tasks (Create, Read, Update, Delete)
- 📦 MongoDB for persistent data storage
- 🎨 Responsive frontend using React
- 🧭 Dynamic Kanban-style task board
- 🧾 Contact & Features pages
- 🛠 Express backend with modular routes
- 🔁 CORS, bcrypt, and Axios integration

## 📁 Project Structure

webalar/
├── backend/
│ ├── auth/ # Authentication routes
│ ├── model/ # Mongoose schemas
│ ├── routers/ # Task routes
│ ├── server.js # App entry point
│ └── .env # Secrets & config
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ └── Navbar.jsx
| | | ├── Register.jsx
| | | ├── Login.jsx
| | ├── home
| | | └──Home.jsx
| | | ├──home.css
│ │ ├── pages
│ │ │ ├── Contact.jsx
│ │ │ └── Features.jsx
| | ├── Routers
| | | └── ProtectedRoute.jsx
│ │ ├── App.js
│ │ └── App.css
│ └── package.json

bash
Copy
Edit

## 🛠 Setup & Run Locally

### Backend

bash
cd backend
npm install
touch .env
.env file

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
bash
Copy
Edit
node server.js
Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
Frontend runs on http://localhost:3000, backend on http://localhost:5000.

✅ API Endpoints
Auth
POST /api/register — User registration

POST /api/login — Login & get JWT

Tasks
GET /api/tasks — Fetch all tasks

POST /api/tasks — Create a task

PUT /api/tasks/:id — Update task

DELETE /api/tasks/:id — Delete task

🧠 Tech Stack
Frontend: React, Axios

Backend: Node.js, Express, MongoDB, Mongoose

Auth: JWT, bcrypt

Tools: CORS, dotenv

🤝 Contribution
Feel free to fork and enhance the platform with real-time updates, drag-n-drop features, or role-based views!
