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
    <div className="min-h-screen bg-linear-to-br from-primary via-secondary to-light flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
          <h2 className="text-2xl font-semibold text-primary">
            Admin Dashboard
          </h2>

          <button
            onClick={logout}
            className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>

        <div className="space-y-5">
          {users.map((user) => (
            <div
              key={user.username}
              className="bg-secondary rounded-lg shadow p-4"
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                {user.username}
              </h4>

              {user.tasks.length === 0 ? (
                <p className="text-sm text-gray-500">No tasks assigned</p>
              ) : (
                <div className="space-y-2">
                  {user.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between bg-slate-200 px-3 py-2 rounded-md text-sm"
                    >
                      <span className="font-medium">{task.title}</span>
                      <span className="text-gray-600">{task.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
