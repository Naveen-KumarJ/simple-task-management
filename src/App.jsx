import React from "react";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { router } from "./routes/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
