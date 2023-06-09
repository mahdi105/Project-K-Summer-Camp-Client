import React from 'react';
import Container from '../Container';
import SectionHeading from '../SectionHeading/SectionHeading';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {
    return (
        <section className='py-16' style={{
            backgroundImage: 'url("/testimonial.jpeg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Container>
                <div className='w-7/12 mx-auto'>
                    <SectionHeading heading='Trusted By More Than 1000 Students Every Year'></SectionHeading>
                </div>
                <div className='w-9/12 mx-auto'>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='bg-white rounded-sm py-16 px-8 flex flex-col items-center'>
                                <div className='mb-3'>
                                    <img className='w-[100px] h-[100px] rounded-full' src="https://img.freepik.com/free-photo/portrait-afro-american-sportsman-basketball-player-sportswear-with-ball-dark-background_613910-6485.jpg?w=900&t=st=1686335719~exp=1686336319~hmac=20854cceed90c1544f5ebd4f3deaaead18b29551844894d83269736c28ee0225" alt="" />
                                </div>
                                <p className='w-9/12 mx-auto mb-2 font-semibold text-[14px] md:text-[17px] text-center'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tempore aut quod quo ad iure mollitia amet aliquid ex quidem eligendi, excepturi dolorem, qui ipsum! Facere, incidunt modi! Eveniet, magni."</p>
                                <div>
                                    <h2 style={{ fontFamily: 'Poppins' }} className='text-[19px] md:text-2xl font-bold mb-1 text-center text-[#FF1D6A]'>--Jacky Chan</h2>
                                    <div className='flex justify-center'>
                                        <Rating readOnly value={4.4} style={{ maxWidth: 90 }} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white rounded-sm py-16 px-8 flex flex-col items-center'>
                                <div className='mb-3'>
                                    <img className='w-[100px] h-[100px] rounded-full' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1686336750~exp=1686337350~hmac=514cac724dd9ee886f779a1167d2ab7b126e530fe503fbbb7d51abe5d3c642c7" alt="" />
                                </div>
                                <p className='w-9/12 mx-auto mb-2 font-semibold text-[14px] md:text-[17px] text-center'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tempore aut quod quo ad iure mollitia amet aliquid ex quidem eligendi, excepturi dolorem, qui ipsum! Facere, incidunt modi! Eveniet, magni."</p>
                                <div>
                                    <h2 style={{ fontFamily: 'Poppins' }} className='text-[19px] md:text-2xl font-bold mb-1 text-center text-[#FF1D6A]'>--Jacky Chan</h2>
                                    <div className='flex justify-center'>
                                        <Rating readOnly value={4.4} style={{ maxWidth: 90 }} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white rounded-sm py-16 px-8 flex flex-col items-center'>
                                <div className='mb-3'>
                                    <img className='w-[100px] h-[100px] rounded-full' src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=900&t=st=1686336792~exp=1686337392~hmac=488eda4a93b4e7d456de2b834ff16faa57e211596d018b8e5bf43b50be10d1a4" alt="" />
                                </div>
                                <p className='w-9/12 mx-auto mb-2 font-semibold text-[14px] md:text-[17px] text-center'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tempore aut quod quo ad iure mollitia amet aliquid ex quidem eligendi, excepturi dolorem, qui ipsum! Facere, incidunt modi! Eveniet, magni."</p>
                                <div>
                                    <h2 style={{ fontFamily: 'Poppins' }} className='text-[19px]  md:text-2xl font-bold mb-1 text-center text-[#FF1D6A]'>--Jacky Chan</h2>
                                    <div className='flex justify-center'>
                                        <Rating readOnly value={4.4} style={{ maxWidth: 90 }} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;