import React from 'react';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import useAuth from '../../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaCreditCard } from 'react-icons/fa';
import ClassRaw from '../../components/Utils/ClassRaw/ClassRaw';
import { toast } from 'react-hot-toast';


const notify = (str) => toast.success(str);
const tableHeaderFooter = <>
    <tr className='bg-blue-50'>
        <th className='text-black'>
            Delete
        </th>
        <th className='text-black'>Class</th>
        <th className='text-black'>More Info</th>
        <th className='text-black'>Instructor</th>
        <th className='flex gap-2 items-center text-rose-600'><FaCreditCard></FaCreditCard><span className='text-black'>Pay</span></th>
    </tr>
</>;
const SelectedClasses = () => {
    const { user, loading } = useAuth();
    const axios = useAxiosSecure();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const data = await axios.get(`/selectedClasses?email=${user?.email}`);
            return data;
        }
    })
    const classes = !isLoading && data.data;
    // Handle Delete 
    const handleDelete = (id) => {
        const proceed = confirm ('Are your sure?');
        if(proceed){
            axios.delete(`/selectedClass/${id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    notify('Deleted The Selected Class');
                    refetch();
                }
            })
        }
    }
    return (
        <div>
            <SectionHeading heading='All Selected Classes'></SectionHeading>
            <div className='px-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            {tableHeaderFooter}
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           {
                            classes && classes.map(item => <ClassRaw key={item._id} course={item.course} itemId={item._id} handleDelete={handleDelete}></ClassRaw>)
                           }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            {tableHeaderFooter}
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClasses;