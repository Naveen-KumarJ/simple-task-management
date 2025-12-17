import React, { useEffect, useState } from "react";
import {
  getActiveUser,
  getTasksData,
  removeActiveUser,
  setTasksData,
} from "../utils/storageHelper";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const UserDashboard = () => {
  const { username } = getActiveUser();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = getTasksData();
    const userData = data.users.find((user) => user.username === username);
    setTasks(userData ? userData.tasks : []);
  }, [username]);

  const updateTasks = (updatedTasks) => {
    const taskData = getTasksData();
    let user = taskData.users.find((u) => u.username === username);

    if (!user) taskData.users.push({ username, tasks: updatedTasks });
    else user.tasks = updatedTasks;

    setTasksData(taskData);
    setTasks(updatedTasks);
  };

  const logout = () => {
    removeActiveUser();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary via-secondary to-light flex items-center justify-center px-4">
      <div className="bg-primary w-full max-w-4xl rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
          <h2 className="text-2xl font-semibold text-white">
            Welcome, <span className="font-bold">{username}</span>
          </h2>

          <button
            onClick={logout}
            className="px-4 py-2 bg-white text-primary font-semibold rounded-md cursor-pointer"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskForm tasks={tasks} updateTasks={updateTasks} />
          <TaskList tasks={tasks} updateTasks={updateTasks} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
