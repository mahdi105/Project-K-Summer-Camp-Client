import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';

const useRoleCheck = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    // Get the user saved in database and check the role
    const { data, isLoading } = useQuery({
        queryKey: ['saved User', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const data = await axiosSecure.get(`/user?email=${user?.email}`);
            return data;
        }
    })
    
    return !isLoading && data;
};

export default useRoleCheck;