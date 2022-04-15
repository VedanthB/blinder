import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/providers/AuthProvider'

function PrivateRoutes() {
    const { authState } = useAuth()

    const { user, encodedToken } = authState

    return encodedToken ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
