import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '/logo.png';
import { FaClipboardCheck, FaHistory, FaHome, FaListAlt, FaPlus, FaRegListAlt, FaUsers } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';


// User dashboard pages link
const userLinks = <>
    {/* Sidebar content here */}
    <li ><Link to='/dashboard/selectedClasses' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'> <FaListAlt></FaListAlt> Selected Classes</Link></li>
    <li ><Link to='/dashboard/enrolledClasses' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'><FaClipboardCheck></FaClipboardCheck> Enrolled Classes</Link></li>
    <li ><Link to='/dashboard/paymentHistory' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'><FaHistory></FaHistory> Payment History</Link></li>
</>;
// Admin Dashboard Pages Links
const adminLinks = <>
    <li ><Link to='/dashboard/manageClasses' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'> <FaListAlt></FaListAlt>  Manage Classes</Link></li>
    <li ><Link to='/dashboard/manageUsers' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'><FaClipboardCheck></FaClipboardCheck> Manage Users</Link></li>
</>;
// Instructor Dashboard Pages Links
const instructorsLink = <>
    <li ><Link to='/dashboard/addAClass' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'> <FaPlus></FaPlus> Add a Class</Link></li>
    <li ><Link to='/dashboard/myClasses' className='border mb-1 text-sm uppercase font-semibold shadow-md shadow-blue-100'><FaListAlt></FaListAlt> My Classes</Link></li>
</>
const Dashboard = () => {
    const { isAdmin, isLoading } = useAdmin();
    const { isInstructor, instrLoading } = useInstructor();
    return (
        <>
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
                                {
                                  !isLoading && isAdmin && adminLinks || !instrLoading && isInstructor && instructorsLink || userLinks
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster></Toaster>
        </>
    );
};

export default Dashboard;