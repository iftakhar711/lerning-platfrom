import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Context';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    if (user && user.uid) {
        return children
    }
    return <>
        return <Navigate to='/login' state={{ from: location }} replace />
        {toast.error('login first')}
    </>
};

export default PrivateRoute;