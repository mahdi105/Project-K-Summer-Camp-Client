import React from 'react';
import Container from '../../Utils/Container';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import './Header.css'
// Main Menu
const menu = <>
    <li className='uppercase font-semibold text-[#0f3054]'><NavLink className={({ isActive}) => isActive ? "active" : ""} to='/'>Home</NavLink></li>
    <li className='uppercase font-semibold text-[#0f3054]'><NavLink className={({ isActive}) => isActive ? "active" : ""} to='/instructors'>Instructors</NavLink></li>
    <li className='uppercase font-semibold text-[#0f3054]'><NavLink className={({ isActive}) => isActive ? "active" : ""} to='/classes'>Classes</NavLink></li>
    <li className='uppercase font-semibold text-[#0f3054]'><NavLink className={({ isActive}) => isActive ? "active" : ""} to='/about'>About Us</NavLink></li>
    <li className='uppercase font-semibold text-[#0f3054]'><NavLink className={({ isActive}) => isActive ? "active" : ""} to='/contact'>Contact Us</NavLink></li>
    <li className='uppercase font-semibold text-[#0f3054]'><NavLink className={({ isActive}) => isActive ? "active" : ""} to='/register'>Register</NavLink></li>
</>

const Header = () => {
    return (
        <header>
            <Container>
                <div className="navbar bg-base-100 py-7">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <div>
                            <img className='w-5/12' src={logo} alt="Summer Sports logo" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div><img className='w-[50px] h-[50px] rounded-full border border-slate-100 mr-2' src="" alt="" /></div>
                        <Link className="btn">Dashboard</Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;