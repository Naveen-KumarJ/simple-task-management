import React, { useState } from "react";

const TaskForm = ({ tasks, updateTasks }) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const addTask = () => {
    updateTasks([...tasks, { id: Date.now(), title, duration }]);
    setTitle("");
    setDuration("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-primary mb-4">Add New Task</h3>

      <div className="space-y-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (e.g. 2 hrs)"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <button
          onClick={addTask}
          className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
