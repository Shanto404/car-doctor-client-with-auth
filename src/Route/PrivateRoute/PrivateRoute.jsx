import React, { useContext } from 'react';
import { AuthContext } from '../../Auth Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user.email) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;