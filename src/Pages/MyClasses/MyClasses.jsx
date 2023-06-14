import React from 'react';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import ClassInstructorRaw from '../../components/Utils/ClassInstructorRaw/ClassInstructorRaw';

const tableHeaderFooter = <>
    <tr className='bg-blue-50'>
        <th className='text-black'>
            Class
        </th>
        <th className='text-black'>Class Info</th>
        <th className='text-black'>Instructor</th>
        <th className='flex gap-2 items-center'>
            Feedback
        </th>
        <th className='text-black'>
            Update Action
        </th>
    </tr>
</>

const MyClasses = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();
    const {data, isLoading} = useQuery({
        queryKey: ['myClasses'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/myClasses?email=${user?.email}`);
            return res.data;
        }
    })
    return (
        <section>
            <SectionHeading heading='My Classes'></SectionHeading>
            <div className='px-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            {tableHeaderFooter}
                        </thead>
                        <tbody>
                            {
                                !isLoading && data.map(item => <ClassInstructorRaw key={item._id} item={item}></ClassInstructorRaw>)
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

export default MyClasses;