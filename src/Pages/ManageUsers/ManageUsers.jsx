import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import useAuth from '../../Hooks/UseAuth';
import UserManageRaw from '../../components/Utils/UserManageRaw/UserManageRaw';
import { toast } from 'react-hot-toast';

const tableHeaderFooter = <>
    <tr className='bg-blue-50'>
        <th className='text-black'>
            Instructor
        </th>
        <th className='text-black'>Instructor Email</th>
        <th className='text-black'>Set Privilage</th>
    </tr>
</>;
const notify = (str) => toast.success(str);

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`);
            return res.data;
        }
    });
    const handleAdmin = (id) => {
        axiosSecure.patch(`/users/admin_privilage/${id}`)
        .then(res=> {
            if(res.data.modifiedCount > 0){
                notify('This user is now an Admin');
                refetch();
            }
        });
    }
    const handleInstructor = (id) => {
        axiosSecure.patch(`/users/instructor_privilage/${id}`)
        .then(res=> {
            if(res.data.modifiedCount > 0){
                notify('This user is now an Instructor');
                refetch();
            }
        });
    }
    return (
        <section>
            <SectionHeading heading='Manage Users'></SectionHeading>
            <div className='px-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            {tableHeaderFooter}
                        </thead>
                        <tbody>
                            {
                                !isLoading && data.map(item => <UserManageRaw key={item._id} item={item} handleAdmin={handleAdmin} handleInstructor={handleInstructor}></UserManageRaw>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            {tableHeaderFooter}
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageUsers;