import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import React, { useMemo } from 'react'

const AdminPrivateRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.user.isAuthenticated)
    const isAdmin = useSelector((state) => state.auth.user.isAdmin)
    const authStatus = useMemo(() => ({ isAuthenticated, isAdmin }), [isAuthenticated, isAdmin]);

  return (authStatus.isAuthenticated && authStatus.isAdmin? <Outlet/> : <Navigate to='admin_login/' />)
}
export default AdminPrivateRoute;