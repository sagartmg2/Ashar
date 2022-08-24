import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute(props) {

    const is_logged = useSelector((state) => state.auth.is_logged_in)
    const user = useSelector((state) => state.auth.user)

    if (props.role && (user.role != props.role)) {
        return <><h1>Forbidden</h1></>
    }

    return is_logged ? <Outlet /> : <Navigate to="/" />


}
