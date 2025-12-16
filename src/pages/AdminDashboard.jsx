import React, { useEffect, useState } from "react";
import { getTasksData, removeActiveUser } from "../utils/storageHelper";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(getTasksData().users);
  }, []);

  const logout = () => {
    removeActiveUser();
    navigate("/");
  };
  return (
    <div>
      <h2>AdminDashboard</h2>
      <button onClick={logout}>Logout</button>

      {users.map((user) => (
        <div key={user.username}>
          <h4>{user.username}</h4>
          {user.tasks.map((task) => (
            <div>
              {task.title} - {task.duration}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
