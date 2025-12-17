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
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-primary mb-4 text-center underline">
        Tasks List
      </h3>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-slate-200 p-3 rounded-md"
          >
            {editId === task.id ? (
              <>
                <div className="flex flex-col md:flex-row gap-2 w-full">
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="px-2 py-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="px-2 py-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => saveEdit(task.id)}
                    className="px-3 py-1 bg-primary text-white cursor-pointer hover:opacity-90"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="px-3 py-1 bg-gray-400 text-white cursor-pointer hover:opacity-90"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-gray-800 font-medium">
                  {task.title}{" "}
                  <span className="text-sm text-gray-600">
                    ({task.duration})
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(task)}
                    className="px-3 py-1 bg-secondary text-white cursor-pointer hover:opacity-90"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-3 py-1 bg-red-500 text-white cursor-pointer hover:opacity-90"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
