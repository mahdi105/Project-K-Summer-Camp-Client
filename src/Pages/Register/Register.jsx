import React, { useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import Container from '../../components/Utils/Container';
import { Link } from 'react-router-dom';
import gIcon from '/g.png';
import signup from '/singup.jpg';
import axios from 'axios';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, profileUpdate } = useAuth();
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const handleRegister = (data) => {
        const name = data.name;
        const image = data.photo[0];
        const email = data.email;
        const password = data.password;
        const confirm = data.confirm;
        setError('');
        if(password !== confirm){
            setError("Password is incorrect");
            return;
        };
        const formData = new FormData();
        formData.append('image', image);
        const URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_KEY}`;
        axios.post(URL, formData)
        .then(res => {
            const imageLink = res.data.data.display_url;
            // Registration
            createUser(email, password)
            .then(result => {
                profileUpdate(name, imageLink)
                .then(res => {
                    const newUser = {name: name, email: email}
                    axios.post('http://localhost:5000/users', newUser)
                    .then(res => console.log(res.data))
                })
                .catch(error => alert(`I'm not able to update user profile while Registration. Erro: ${error.message}`))
               
            })
            .catch(error => alert(`I'm not able to Create User while registration, Error: ${error.message}`));
        })
    };

    return (
        <div className='mt-[120px] py-20'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='bg-slate-50 rounded-lg shadow-lg p-8'>
                        <h2 style={{ fontFamily: 'Poppins' }} className='uppercase font-bold text-4xl text-center mb-8'>Sign UP</h2>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="text-[16px] font-semibold uppercase">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="John Doe" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="text-[16px] font-semibold uppercase">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="example@summersports.com" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="text-[16px] font-semibold uppercase">Password</span>
                                </label>
                                <input {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/ })} type="password" placeholder="$#@AAaa123" className="input input-bordered w-full mb-2" />
                                {errors.password && <p className='text-red-500'>Password must have at least one uppercase letter, one number, a special character and more than 5 characters</p>}
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="text-[16px] font-semibold uppercase">Confirm Password</span>
                                </label>
                                <input {...register("confirm", { required: true })} type="password" className="input input-bordered w-full" />
                                {
                                    error && <p className='text-red-500 py-2'>{error}</p>
                                }
                            </div>
                            <div className="form-control w-full mb-8">
                                <label className="label">
                                    <span className="text-[16px] font-semibold uppercase">Profile Picture</span>
                                </label>
                                <input {...register("photo", { required: true })} type="file" placeholder="Enter your profile picture" className="file-input w-full" />
                            </div>
                            <button type='submit' className='btn btn-primary text-white w-full mb-6'>Submit</button>
                            <p className='text-center'>Already have an account? Please <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>
                            <div className="divider mb-5">OR</div>
                            <div className='text-center pt-2'>
                                <button >
                                    <img className='w-[40px]' src={gIcon} alt="" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={signup} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;