import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { isAdmin, isLoading } = useAdmin();
    if (isLoading) {
        return <div className='text-center leading-[10vh]'>
            <p><span className="loading loading-infinity loading-lg"></span></p>
        </div>
    }
    if(isAdmin){
        return children;
    }
    return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;