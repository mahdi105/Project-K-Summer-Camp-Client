import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/UseAuth';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import EnrolledClassRaw from '../../components/Utils/EnrolledClassRaw/EnrolledClassRaw';

const tableHeaderFooter = <>
    <tr className='bg-blue-100'>
        <th>Class</th>
        <th>Class Info</th>
        <th>Instructor</th>
    </tr>
</>
const EnrolledClass = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const { data, isLoading } = useQuery({
        queryKey: ['enrolled Class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClasses?email=${user?.email}`);
            return res.data;
        }
    })

    return (
        <section className='py-10'>
            <SectionHeading heading='Total Enrolled Classes'></SectionHeading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            {tableHeaderFooter}
                        </thead>
                        <tbody>
                            {
                                !isLoading && data.map(myClass => <EnrolledClassRaw key={myClass._id} myClass={myClass}></EnrolledClassRaw>)
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

export default EnrolledClass;