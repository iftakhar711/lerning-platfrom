import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/Context';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user && user.uid) {
        return children
    }
};

export default PrivateRoute;