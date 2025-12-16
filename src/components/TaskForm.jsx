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
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="duration"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
