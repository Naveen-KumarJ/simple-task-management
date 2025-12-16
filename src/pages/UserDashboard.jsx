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
    <div>
      <h2>User Dashboard - {username}</h2>
      <button onClick={logout}>Logout</button>

      <TaskForm tasks={tasks} updateTasks={updateTasks} />
      <TaskList tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
};

export default UserDashboard;
