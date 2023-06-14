import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import image from '/error.png'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate();
    return (
       <div className='h-[70vh] py-20'>
            <div className='w-[230px] mx-auto mb-8'>
                <img className='w-full' src={image} alt="" />
            </div>
            <h1 style={{fontFamily: 'Poppins'}} className='text-center font-black text-[130px] leading-[100px] mb-3'>{error.status}</h1>
            <p className='text-center'>{error.statusText}</p>

            <div className='flex items-center'>
                <button onClick={()=> navigate('/')} className="btn btn-error">Back To Home</button>
            </div>
       </div>
    );
};

export default ErrorPage;