import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <div className='text-center leading-[100vh]'>
            <p><span className="loading loading-infinity loading-lg"></span></p>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;