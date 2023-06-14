import React, { useEffect, useState } from 'react';
import Container from '../../Utils/Container';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import './Header.css'
import useAuth from '../../../Hooks/UseAuth';
import ThemeToggler from '../../Utils/ThemeToggler/ThemeToggler';
// Main Menu
const menu = <>
    <li className='uppercase text-[14px] font-semibold text-[#0f3054]'><NavLink className={({ isActive }) => isActive ? "active" : ""} to='/'>Home</NavLink></li>
    <li className='uppercase text-[14px] font-semibold text-[#0f3054]'><NavLink className={({ isActive }) => isActive ? "active" : ""} to='/instructors'>Instructors</NavLink></li>
    <li className='uppercase text-[14px] font-semibold text-[#0f3054]'><NavLink className={({ isActive }) => isActive ? "active" : ""} to='/classes'>Classes</NavLink></li>
    <li className='uppercase text-[14px] font-semibold text-[#0f3054]'><NavLink className={({ isActive }) => isActive ? "active" : ""} to='/register'>Register</NavLink></li>
</>

const Header = () => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(storedTheme ? storedTheme : 'light');
    const { user, loading, logOut } = useAuth();
    const handlelogOut = () => {
        const proceed = confirm('Are you sure to logout?');
        if (proceed) {
            logOut()
                .then(() => alert("logout Successful"))
                .catch(error => console.log(error.message))
        }
    }
    //Light/Dark Theme effect 
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme])
    return (
        <header className='fixed top-0 left-0 right-0 z-10 bg-white shadow-md shadow-[#17197319]'>
            <Container>
                <div className="navbar py-2">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                                <Link to='/dashboard' className="md:hidden py-1 px-3 rounded-lg mt-1 bg-[#FF1B62] text-white hover:text-black transition-all duration-300">Dashboard</Link>
                                {
                                    user && <button className='md:ml-5 text-[15px] font-black rounded-full py-1 px-3 mt-1' onClick={handlelogOut}>Logout</button>
                                }
                            </ul>
                        </div>
                        <Link to='/' className='ml-2 md:ml-0 w-5/12 md:w-6/12'>
                            <img className='w-full md:w-6/12' src={logo} alt="Summer Sports logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                            {
                                user && <button className='badge badge-ghost mt-2 ml-5 text-[15px] font-black rounded-full' onClick={handlelogOut}>Logout</button>
                            }
                        </ul>
                        <ThemeToggler theme={theme} setTheme={setTheme}></ThemeToggler>
                    </div>
                    <div className="navbar-end">
                        {
                            !loading && user !== null && user.email ?
                                <>
                                    <div>
                                        <img className='w-[50px] h-[50px] mr-4 rounded-full border border-slate-100' src={!loading && user !== null && user?.photoURL} alt="" />
                                    </div>
                                    <Link to='dashboard' className="hidden md:inline-block py-2 px-4 bg-[#FF1B62] text-white hover:text-black transition-all duration-300">Dashboard</Link>
                                </>
                                :
                                <Link to='/login' className="hidden md:inline-block py-2 px-4 bg-[#FF1B62] text-white hover:text-black transition-all duration-300">Login</Link>
                        }
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;