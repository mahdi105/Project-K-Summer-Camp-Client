import React from 'react';
import Container from '../../Utils/Container';
import logo from '/footer-logo.png'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterestP, FaRegPaperPlane, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#17122d]'>
            <Container>
                <div className='py-8 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10'>
                    <div>
                        <img className='w-4/12 mb-5 mx-auto' src={logo} alt="" />
                        <p className='text-[#e3e3e3] text-[14px] mb-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam ipsam eligendi architecto sed quae fugit eius, animised quae fugit eius, animi</p>
                        <div className='flex items-center justify-center border border-white py-3 rounded-md text-white gap-3'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaPinterestP />
                            <FaLinkedinIn />
                            <FaTwitter />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold uppercase text-xl mb-3 text-[#FF1B62] border-b border-white pb-2'>Import Links</h2>
                        <ul className='list-none flex flex-col gap-2'>
                            <li className='text-white hover:text-[#FF1B62] transition-all duration-300'><Link to='/'>Home</Link></li>
                            <li className='text-white hover:text-[#FF1B62] transition-all duration-300'><Link to='/instructors'>Instructors</Link></li>
                            <li className='text-white hover:text-[#FF1B62] transition-all duration-300'><Link to='/'>Classes</Link></li>
                            <li className='text-white hover:text-[#FF1B62] transition-all duration-300'><Link to='/'>Be an Instructor</Link></li>
                            <li className='text-white hover:text-[#FF1B62] transition-all duration-300'><Link to='/'>Join Workshop</Link></li>
                            <li className='text-white hover:text-[#FF1B62] transition-all duration-300'><Link to='/'>Latest News</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold uppercase text-xl mb-3 border-b border-white pb-2 text-[#FF1B62]'>Recent Posts</h2>
                        <div>
                            <div className='flex gap-2 mb-4'>
                                <div className='w-4/6 '>
                                    <img className='w-full h-[80px] object-cover rounded-md' src="https://img.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg?w=900&t=st=1686245352~exp=1686245952~hmac=b722b868a96fe202e60d28b5593572f862e81e3777d6ebf03c04b522e4febe1f" alt="" />
                                </div>
                                <div>
                                    <h3 className='mb-2 text-white'>Fitness training hacks for beginner</h3>
                                    <p className='text-white'>08 June, 2023</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                            <div className='w-4/6 '>
                                    <img className='w-full h-[80px] object-cover rounded-md' src="https://img.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg?w=900&t=st=1686245352~exp=1686245952~hmac=b722b868a96fe202e60d28b5593572f862e81e3777d6ebf03c04b522e4febe1f" alt="" />
                                </div>
                                <div>
                                    <h3 className='mb-2 text-white'>Fitness training hacks for beginner</h3>
                                    <p className='text-white'>08 June, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold uppercase text-xl text-[#FF1B62] mb-3 border-b border-white pb-2'>Keep In Touch</h2>
                        <p className='mb-4 text-white text-sm'>Our academy is the best place for you to utilize your summer. Hope you will enjoy.</p>
                        <div>
                            <div className='text-white flex gap-2 items-center mb-2'>
                                <span className='text-xl'><FaRegPaperPlane /></span>
                                <p>79200 Iskandar Puteri Malaysia mattis</p>
                            </div>
                            <div className='text-white flex gap-2 items-center mb-2'>
                                <span className='text-xl'><FaPhoneAlt /></span>
                                <p>+8801234567890</p>
                            </div>
                            <div className='text-white flex gap-2 items-center mb-2'>
                                <span className='text-xl'><FaEnvelope /></span>
                                <p>example@summercamp.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <div className='bg-[#000b23] py-4 text-center'>
                <p className='text-[#3b3b3b]'>&copy; 2023 Summer Sports Academy - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;