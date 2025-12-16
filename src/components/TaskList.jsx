import React, { useState } from "react";

const TaskList = ({ tasks, updateTasks }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDuration, setEditDuration] = useState("");

  const deleteTask = (taskId) => {
    let finalUpdatedTasks = tasks.filter((task) => task.id !== taskId);
    updateTasks(finalUpdatedTasks);
  };

  const editTask = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditDuration(task.duration);
  };

  const saveEdit = (taskId) => {
    const finalUpdatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, title: editTitle, duration: editDuration }
        : task
    );

    updateTasks(finalUpdatedTasks);
    setEditId(null);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          {editId === task.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDuration}
                onChange={(e) => setEditDuration(e.target.value)}
              />
              <button onClick={() => saveEdit(task.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {task.title} - {task.duration}{" "}
              <button onClick={() => editTask(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
