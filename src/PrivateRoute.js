import React from "react";
import { getToken } from "./AuthService";
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    return getToken() ? <Outlet/> : <Navigate to='/login'/>;
}

export default PrivateRoute