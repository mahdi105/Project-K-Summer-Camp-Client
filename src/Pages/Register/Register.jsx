import React from 'react';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const {createUser} = useAuth();
    
    return (
        <div>
            Register
        </div>
    );
};

export default Register;