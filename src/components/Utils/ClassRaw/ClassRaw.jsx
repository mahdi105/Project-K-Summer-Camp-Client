import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ClassRaw = ({course}) => {
    const {name, image, numberOfStudents, availableSeats, price, status, instructorImage, instructorName,email } = course;
    return (
        <tr>
            {/* Delete Action */}
            <td>
                <button className="btn btn-square btn-xs text-[#FF1E65]">
                    <FaTrashAlt></FaTrashAlt>
                </button>
            </td>
            {/* Class Name */}
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
                <p>No. Students: {numberOfStudents}</p>
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
                        <h2>{instructorName}</h2>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </td>
            {/* Pay button */}
            <th>
                <button className="btn btn-primary btn-xs text-white font-bold uppercase">
                    <span>Pay</span>
                </button>
            </th>
        </tr>
    );
};

export default ClassRaw;