import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAuth from './UseAuth';

const useRoleCheck = () => {
    const {user, loading} = useAuth();
    // Get the user saved in database and check the role
    const { data, isLoading } = useQuery({
        queryKey: ['saved User', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const data = await axios.get(`http://localhost:5000/user?email=${user?.email}`);
            return data;
        }
    })
    
    return !isLoading && data;
};

export default useRoleCheck;