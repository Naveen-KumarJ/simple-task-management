import React, { useState } from "react";
import { accountsInfo } from "../data/accountsInfo";
import { setActiveUser } from "../utils/storageHelper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = accountsInfo.find(
      (acc) => acc.username === username && acc.password === password
    );
    if (!user) {
      alert("User Not Found!");
      return;
    }
    setActiveUser(user);

    if (user.role === "admin") navigate("/admin");
    else navigate("/user");
  };

  return (
    <div className="bg-linear-to-br from-primary via-secondary to-light  min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-100 w-full max-w-md rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:opacity-90 transition duration-200 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
