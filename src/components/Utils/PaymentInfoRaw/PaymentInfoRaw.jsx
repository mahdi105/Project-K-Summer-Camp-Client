import React from 'react';

const PaymentInfoRaw = ({payment}) => {
    const {amount, transactionId, status, classId} = payment;
    return (
        <tr>
            <td>
                <p className='font-semibold text-rose-500'>{transactionId}</p>
            </td>
            <td>
                <p>Amount: ${parseFloat((amount / 100).toFixed(2))}</p>
                <p className="badge badge-ghost badge-sm">Status: {status}</p>
            </td>
            <td>
                <p>{classId}</p>
            </td>
        </tr>
    );
};

export default PaymentInfoRaw;