import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import React from "react";

const UserPrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.user.isAuthenticated);
  
  return isAuthenticated? <Outlet/> : <Navigate to='/login' />
};

export default UserPrivateRoute;
