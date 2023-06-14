import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClassAdminRaw = ({ item, handleApproval, handleDeny,refetch }) => {
    const { _id, image, name, instructorImage, email, price, status, availableSeats,feedback } = item;
    const navigate = useNavigate();
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <h2>{name}</h2>
                    </div>
                </div>
            </td>
            {/* More Class Information */}
            <td>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: {price}</p>
                <p>Status: <span className='badge badge-ghost badge-sm'>{status}</span></p>
            </td>
            {/* Instructor Information */}
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={instructorImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className='flex gap-2 items-center justify-center'>
                    <button onClick={() => handleApproval(_id)} disabled={status === 'approved'} className='btn btn-primary btn-xs'>Approve</button>
                    <button onClick={() => handleDeny(_id)} disabled={status === 'denied'} className='btn btn-error btn-xs'>Deny</button>
                    <button onClick={()=> navigate(`/dashboard/feedback/${_id}`)} disabled={feedback} className='btn btn-xs btn-ghost'>Feedback</button>
                </div>
            </td>
        </tr>
    );
};

export default ClassAdminRaw;