import React from "react";
import { Navigate } from "react-router-dom";
import { getActiveUser } from "../utils/storageHelper";

const ProtectedRoute = ({ children, role }) => {
  const user = getActiveUser();

  if (!user) return <Navigate to="/" />;

  if (user.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
