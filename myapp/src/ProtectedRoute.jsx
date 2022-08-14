import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
export default function ProtectedRoute() {

    let is_logged = true

    let navigate = useNavigate();
    // if (!is_logged) {
    //     // return navigate("/");
    //     return <Navigate to="/" />
    // }

    return is_logged ? <Outlet /> : <Navigate to="" />
    
    return (
        <Outlet />
    )
}
