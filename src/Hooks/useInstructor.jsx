import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user, loading} = useAuth();
    const axios = useAxiosSecure();
    const {data: isInstructor, isLoading: instrLoading} = useQuery({
        queryKey: ['instructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/users/instructor/${user?.email}`);
            return res.data.isInstructor;
        }
    })
    return {isInstructor, instrLoading};
};

export default useInstructor;