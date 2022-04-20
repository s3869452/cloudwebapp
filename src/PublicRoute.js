import React from "react";
import { getToken } from "./AuthService";
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    return !getToken() ? <Outlet/> : <Navigate to='/account'/>;
}

export default PublicRoute