const express = require("express");
const router = express.Router();
const Task = require('../model/taskSchema');

// 🔁 Create Task
router.post('/', async (req, res) => {
  const { title, description, user, status } = req.body;
  if (!title || !description || !user || !status) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const newTask = await Task.create({ title, description, user, status });
    res.status(201).json(newTask);
    console.log("New task created:", newTask);
  } catch (err) {
    res.status(500).json({ error: "Task creation failed", details: err });
  }
});

// 📥 Get All Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ message: "Tasks fetched", tasks });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks", details: err });
  }
});

// ✏️ Update Task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, user, status } = req.body;
  if (!title || !description || !user || !status) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, user, status },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updatedTask);
    console.log("Task updated:", updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Task update failed", details: err });
  }
});

// ❌ Delete Task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
    console.log("Task deleted:", deletedTask);
  } catch (err) {
    res.status(500).json({ error: "Task deletion failed", details: err });
  }
});

module.exports = router;
