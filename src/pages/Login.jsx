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
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
