import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectPath = "/" }) => {
    if (!isAllowed || null) {   
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />; 
}