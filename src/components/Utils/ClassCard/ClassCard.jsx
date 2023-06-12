import React from 'react';
import { Fade} from 'react-awesome-reveal';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({ course, roleCheck }) => {
    const { _id, name, image, instructorName, instructorImage, price, availableSeats, numberOfStudents } = course;
    const navigate = useNavigate();
    const axios = useAxiosSecure();
    const {user, loading} = useAuth(); 
    const handleSelect = () => {
        if(!loading && user === null && !user?.email){
            alert("Please login before select any class.");
            navigate('/login');
            return;
        }                           
    }
    return (
        <div className={`card w-full ${parseInt(availableSeats) === 0 ? 'bg-red-400' :'bg-base-100'} shadow-xl`}>
            <figure>
                <Fade cascade>
                    <img src={image} alt="Shoes" />
                </Fade>
            </figure>
            <div className="card-body">
                <h2 style={{ fontFamily: 'Poppins' }} className="font-bold capitalize text-xl">{name}</h2>
                <h3 className='font-semibold text-[#ff1b65]'>Instructor:</h3>
                <div className='flex items-center gap-2 p-2 rounded-md border border-slate-200 mb-2'>
                    <img className='w-[40px] h-[40px] rounded-full' src={instructorImage} alt="Instructor Image" />
                    <h2 className='font-semibold text-[17px]'>{instructorName}</h2>
                </div>
                <div className='mb-3'>
                    <h3 className='font-semibold text-[#ff1b65] border-b pb-2 mb-2'>More Info:</h3>
                    <p className='font-semibold text-[14px]'>Available Seats: <span>{availableSeats}</span></p>
                    <p className='font-semibold text-[14px]'>Number of Students: <span>{numberOfStudents}</span></p>
                    <p className='font-semibold text-[14px]'>Price: <span className='text-red-500'>${price}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <button disabled={parseInt(availableSeats) === 0 || roleCheck} onClick={handleSelect} className="btn btn-primary">Select Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;