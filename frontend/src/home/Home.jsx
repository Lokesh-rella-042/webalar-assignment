import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  //const [newTask, setNewTask] = useState({ title: "", description: "", user: "", status: "Todo" });

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then(response => setTasks(response.data.tasks))
      .catch(error => {
        console.error("Error fetching tasks:", error);
        alert("Failed to load tasks");
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        setTasks(prev => prev.filter(task => task._id !== id));
      })
      .catch(error => {
        console.error("Delete error:", error);
        alert("Failed to delete task");
      });
  };

  const handleEdit = async (id) => {
    const task = tasks.find(t => t._id === id);
    if (!task) return;

    const updatedTitle = prompt("Edit title", task.title);
    const updatedDescription = prompt("Edit description", task.description);
    const updatedUser = prompt("Edit user", task.user);

    if (updatedTitle && updatedDescription && updatedUser) {
      try {
        const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
          title: updatedTitle,
          description: updatedDescription,
          user: updatedUser,
          status: task.status,
        });
        setTasks(prev => prev.map(t => t._id === id ? res.data : t));
      } catch (err) {
        console.error("Edit failed:", err);
        alert("Task update failed");
      }
    }
  };

  const handleAdd = async (status) => {
    const title = prompt("Task title:");
    const description = prompt("Description:");
    const user = prompt("Assigned user:");
    if (title && description && user) {
      try {
        const res = await axios.post("http://localhost:5000/api/tasks", {
          title,
          description,
          user,
          status,
        });
        setTasks(prev => [...prev, res.data]);
      } catch (err) {
        console.error("Add task failed:", err);
        alert("Failed to add task");
      }
    }
  };

  const statuses = ["Todo", "In Progress", "Done"];

  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="kanban-board">
        {statuses.map((status, index) => (
          <div className="kanban-column" key={index}>
            <h2>
              {status === "Todo" ? "📋 Todo" : status === "In Progress" ? "🚧 In Progress" : "✅ Done"}
            </h2>
            {tasks.filter(task => task.status === status).map(task => (
              <div className="task-card" key={task._id}>
                <div>
                  <strong>{task.title}</strong>
                  <p>{task.description}</p>
                  <small>👤 {task.user}</small>
                </div>
                <div className="task-actions">
                  <button className="edit-btn" onClick={() => handleEdit(task._id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(task._id)}>Delete</button>
                </div>
              </div>
            ))}
            <button className="add-btn" onClick={() => handleAdd(status)}>+ Add Task</button>
          </div>
        ))}

        <div className="loggers-section">
          <h2>🟢 Active Loggers</h2>
          <ul>
            {[...new Set(tasks.map(task => task.user))].map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
