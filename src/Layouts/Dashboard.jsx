import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '/logo.png';
import { FaClipboardCheck, FaHistory, FaHome, FaListAlt, FaRegListAlt, FaUsers } from 'react-icons/fa';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const Dashboard = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <section>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Outlet */}
                        <div className='py-16'>
                            <Outlet></Outlet>
                        </div>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className="menu border-r border-blue-100 shadow-lg p-4 w-60 h-full text-base-content">
                            <div className='mb-5'>
                                <div className='flex items-center gap-2 pt-5 pb-8 flex-col'>
                                    <img className='w-7/12 h-[50px]' src={logo} alt="" />
                                    <p className='uppercase text-xs'>Enjoy the Summer</p>
                                </div>
                                <div className='py-3 flex items-center justify-center gap-5 text-xl text-white bg-blue-900 rounded-md shadow-lg'>
                                    <Link className='hover:text-[#f72f71] transition-all duration-300' title='Home' to='/'><FaHome></FaHome></Link>
                                    <Link className='hover:text-[#FF4683] transition-all duration-300' title='Instructors' to='/instructors'><FaUsers></FaUsers></Link>
                                    <Link className='hover:text-[#FF4683] transition-all duration-300' title='Classes' to='/classes'><FaRegListAlt></FaRegListAlt></Link>
                                </div>
                            </div>
                            <ul>
                                {/* Sidebar content here */}
                                <li ><Link to='/dashboard/selectedClasses' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'> <FaListAlt></FaListAlt> Selected Classes</Link></li>
                                <li ><Link to='/dashboard/enrolledClasses' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'><FaClipboardCheck></FaClipboardCheck> Enrolled Classes</Link></li>
                                <li ><Link to='/dashboard/paymentHistory' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'><FaHistory></FaHistory> Payment History</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </QueryClientProvider>
    );
};

export default Dashboard;