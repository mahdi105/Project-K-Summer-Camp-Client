import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";

// Import Swiper 
import "swiper/css";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const effect = () => {
        AOS.init({ once: false });
        AOS.refresh();
    }
    effect();
    return (
        <div className='py-2'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' h-[calc(100vh-125px)]'>
                        <div className="md:flex items-center justify-between swiper-slide-content container mx-auto px-2 md:px-0 lg:px-20 py-16">
                            <div className="slide-content px-10">
                                <p data-aos="fade-down" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" className='tagline text-[16px] md:text-[36px] text-[#01ACFD] mb-[.5rem]'>Infrastructure</p>
                                <h2 data-aos="fade-left" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" className='heading text-[24px] md:text-[62px] leading-[30px] md:leading-[70px] font-[600] mb-4'>Ultra Modern Academy Complex</h2>
                                <p data-aos="zoom-in" data-aos-once="false" data-aos-duration="400" data-aos-easing="ease-in-out" className='discount capitalize text-[15px] text-[#666666] mb-[1.8rem]'>Join our sports community, enjoy your summer</p>
                                <button className='uppercase text-white border border-transparent hover:text-black hover:bg-white hover:border-orange-600 py-2 px-4 rounded-md bg-orange-600 transition-all duration-300'>Join Now</button>
                            </div>
                            <div className='w-7/12'>
                                <img data-aos="zoom-in" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" src="https://img.freepik.com/free-vector/sportsman-athletics-isometric-composition-with-view-stadium-with-running-track-jumping-barriers-human-characters-vector-illustration_1284-72927.jpg?w=826&t=st=1686287460~exp=1686288060~hmac=ac1ded2ab0375ffdb3c0ec86a93919b3ac807918109aee51be3e7e0d44afac71" className='w-[200px] md:w-[450px] mx-auto mb-2 md:mb-0 rounded-lg' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-[calc(100vh-125px)]'>
                        <div className="md:flex items-center justify-between swiper-slide-content container mx-auto px-2 md:px-0 lg:px-20 py-16">
                            <div className='w-7/12 flex justify-center items-center'>
                                <img data-aos="zoom-in" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" src="https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2149009863.jpg?w=740&t=st=1686287539~exp=1686288139~hmac=77c67c3873689cb446a2129977295b553ebcbeb46d98634cfffc5548ec527cd9" className='w-[200px] md:w-[450px] mx-auto mb-2 md:mb-0 rounded-lg' alt="" />
                            </div>
                            <div className="slide-content px-10">
                                <p data-aos="fade-down" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" className='tagline text-[16px] md:text-[36px] text-[#01ACFD] mb-[.5rem]'>Activity</p>
                                <h2 data-aos="fade-left" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" className='heading text-[24px] md:text-[62px] leading-[30px] md:leading-[70px] font-[600] mb-4'>Learn And Explore Your Dream Course</h2>
                                <p data-aos="zoom-in" data-aos-once="false" data-aos-duration="400" data-aos-easing="ease-in-out" className='discount capitalize text-[15px] text-[#666666] mb-[1.8rem]'>Join our sports community, enjoy your summer</p>
                                <button className='uppercase text-white border border-transparent hover:text-black hover:bg-white hover:border-orange-600 py-2 px-4 rounded-md bg-orange-600 transition-all duration-300'>Join Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' h-[calc(100vh-125px)]'>
                        <div className="md:flex items-center justify-between swiper-slide-content container mx-auto px-2 md:px-0 lg:px-20 py-16">
                            <div className="slide-content px-10">
                                <p data-aos="fade-down" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" className='tagline text-[16px] md:text-[36px] text-[#01ACFD] mb-[.5rem]'>Infrastructure</p>
                                <h2 data-aos="fade-left" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" className='heading text-[24px] md:text-[62px] leading-[30px] md:leading-[70px] font-[600] mb-4'>Ultra Modern Academy Complex</h2>
                                <p data-aos="zoom-in" data-aos-once="false" data-aos-duration="400" data-aos-easing="ease-in-out" className='discount capitalize text-[15px] text-[#666666] mb-[1.8rem]'>Join our sports community, enjoy your summer</p>
                                <button className='uppercase text-white border border-transparent hover:text-black hover:bg-white hover:border-orange-600 py-2 px-4 rounded-md bg-orange-600 transition-all duration-300'>Join Now</button>
                            </div>
                            <div className='w-7/12'>
                                <img data-aos="zoom-in" data-aos-once="false" data-aos-duration="800" data-aos-easing="ease-in-out" src="https://img.freepik.com/free-vector/set-people-enjoying-their-hobbies_23-2148246194.jpg?w=900&t=st=1686290260~exp=1686290860~hmac=cc71131f1e3e406ea77f292947b25dad1bdb1f393994effaef5dd1b405aff990" className='w-[200px] md:w-[450px] mx-auto mb-2 md:mb-0 rounded-lg' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;