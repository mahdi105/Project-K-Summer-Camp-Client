import React, { useState } from 'react';
import Container from '../../components/Utils/Container';
import gIcon from '/g.png'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '/signin.jpg'
import useAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const {logIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const destination = location.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        setError('');
        setIsloading(true);
        logIn(email, password)
        .then(result => {
            alert('Login Successful')
            reset();
            setIsloading(false)
            navigate(destination, {replace:true});
        })
        .catch(error => {
            alert(`I'm not able to login the user. Error: ${error.message}`);
            setIsloading(false)
        })
    }
    return (
        <div className='mt-[120px] py-20'>
            <Helmet>
                <title>Login | Summer Sports Academy</title>
            </Helmet>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='bg-slate-50 rounded-lg shadow-lg p-8'>
                        <h2 style={{ fontFamily: 'Poppins' }} className='uppercase font-bold text-4xl text-center mb-8'>Sign In</h2>
                        <form onSubmit={handleSubmit(handleLogin)}>
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
                                <input {...register("password", { required: true })} type="password" placeholder="$#@AAaa123" className="input input-bordered w-full mb-2" />
                            </div>
                            <button disabled={isLoading} type='submit' className='btn btn-primary text-white w-full mb-6'>
                                {
                                    isLoading ? 'Loding...' : 'Login'
                                }
                            </button>
                            <p className='text-red-500'>{error}</p>
                            <p className='text-center'>Not a member yet? Please <Link className='font-bold text-orange-600' to='/register'>Register</Link></p>
                            <div className="divider mb-5">OR</div>
                            <div className='text-center pt-2'>
                                <button >
                                    <img className='w-[40px]' src={gIcon} alt="" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;