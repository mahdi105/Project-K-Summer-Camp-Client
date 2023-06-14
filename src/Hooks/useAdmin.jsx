import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const axios = useAxiosSecure();
    const {data: isAdmin, isLoading} = useQuery({
        queryKey: ['admin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    });
    return {isAdmin, isLoading};
};

export default useAdmin;