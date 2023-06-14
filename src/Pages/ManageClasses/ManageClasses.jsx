import React from 'react';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassAdminRaw from '../../components/Utils/ClassAdminRaw/ClassAdminRaw';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const tableHeaderFooter = <>
    <tr className='bg-blue-50'>
        <th className='text-black'>
            Class
        </th>
        <th className='text-black'>Class Info</th>
        <th className='text-black'>Instructor</th>
        <th className='flex gap-2 items-center'>
            Action & Feedback
        </th>
    </tr>
</>

const notify = (str) => toast.success(str);
const ManageClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allClasses');
            return res.data;
        }
    });

    const handleApproval = (id) => {
        axiosSecure.patch(`/approveClass/${id}`)
        .then(res =>{
            console.log("Approve Response",res.data);
            notify('This Class is approved');
            refetch();
        })
    }
    const handleDeny = (id) => {
        axiosSecure.patch(`/denyClass/${id}`)
        .then(res => {
            console.log("Deny Response",res.data);
            notify('This class is denied')
            refetch();
        })
    }

    return (
        <section>
            <SectionHeading heading='Manage Classes'></SectionHeading>
            <div className='px-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            {tableHeaderFooter}
                        </thead>
                        <tbody>
                            {
                                !isLoading && data.map(item => <ClassAdminRaw key={item._id} item={item} handleApproval={handleApproval} handleDeny={handleDeny} refetch={refetch}></ClassAdminRaw>)
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

export default ManageClasses;