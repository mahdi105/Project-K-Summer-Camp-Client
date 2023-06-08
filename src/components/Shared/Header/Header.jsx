import React from 'react';
import Container from '../../Utils/Container';
import { Link } from 'react-router-dom';
import logo from '/logo.png'

// Main Menu
const menu = <>
    <li className='uppercase font-semibold text-[#0f3054]'><Link to='/'>Home</Link></li>
    <li className='uppercase font-semibold text-[#0f3054]'><Link to='/instructors'>Instructors</Link></li>
    <li className='uppercase font-semibold text-[#0f3054]'><Link to='/classes'>Classes</Link></li>
    <li className='uppercase font-semibold text-[#0f3054]'><Link to='/about'>About Us</Link></li>
    <li className='uppercase font-semibold text-[#0f3054]'><Link to='/contact'>Contact Us</Link></li>
    <li className='uppercase font-semibold text-[#0f3054]'><Link to='/register'>Register</Link></li>
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
                        <a className="btn">Button</a>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;