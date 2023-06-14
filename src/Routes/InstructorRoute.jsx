import React from 'react';
import useInstructor from '../Hooks/useInstructor';
import { Navigate } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const { isInstructor, instrLoading} = useInstructor();
    if (instrLoading) {
        return <div className='text-center leading-[10vh]'>
            <p><span className="loading loading-infinity loading-lg"></span></p>
        </div>
    }
    if (isInstructor) {
        return children;
    }
    return <Navigate to='/dashboard'></Navigate>
};

export default InstructorRoute;