const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const taskRoutes = require('./routers/router');
const authRoutes = require('./auth/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors()); // ✅ Correct CORS setup
app.use(express.json());

// API Routes
app.use('/api/tasks', taskRoutes); // Tasks CRUD
app.use('/api', authRoutes);       // Register and login

// JSON Parse Error Handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON in request body' });
  }
  next();
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
