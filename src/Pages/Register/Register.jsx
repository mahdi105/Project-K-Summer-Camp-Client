import React from 'react';
import useAuth from '../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import Container from '../../components/Utils/Container';
import { Link } from 'react-router-dom';
import gIcon from '/g.png'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useAuth();

    return (
        <div className='mt-[120px] py-20'>
            <Container>
                <div>
                    <div>

                    </div>
                    <div className='bg-slate-50 rounded-lg shadow-lg p-8'>
                        <h2 style={{ fontFamily: 'Poppins' }} className='uppercase font-bold text-4xl text-center mb-8'>Sign UP</h2>
                        <form>
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
                                <input {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/ })} type="password" placeholder="$#@AAaa123" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="text-[16px] font-semibold uppercase">Confirm Password</span>
                                </label>
                                <input {...register("confirm", { required: true })} type="password" className="input input-bordered w-full" />
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
                </div>
            </Container>
        </div>
    );
};

export default Register;