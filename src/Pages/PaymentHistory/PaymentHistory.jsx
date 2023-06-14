import React from 'react';
import SectionHeading from '../../components/Utils/SectionHeading/SectionHeading';
import useAuth from '../../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import PaymentInfoRaw from '../../components/Utils/PaymentInfoRaw/PaymentInfoRaw';

const tableHeaderFooter = <>
    <tr className='bg-blue-100'>
        <th>Transaction ID</th>
        <th>Amount Info</th>
        <th>Enrolled Class ID</th>
    </tr>
</>
const PaymentHistory = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data, isLoading} = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentsHistory?email=${user?.email}`);
            return res.data;
        }
    });
    return (
        <section >
            <SectionHeading heading='Payment History'></SectionHeading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            {tableHeaderFooter}
                        </thead>
                        <tbody>
                            {
                                !isLoading && data.map(payment =><PaymentInfoRaw key={payment._id} payment={payment}></PaymentInfoRaw> )
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

export default PaymentHistory;