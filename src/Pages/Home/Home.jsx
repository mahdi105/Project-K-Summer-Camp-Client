import React from 'react';
import Hero from '../../components/Utils/Hero/Hero';
import PopularClasses from '../../components/Utils/PopularClasses/PopularClasses';
import PopularInstruct from '../../components/Utils/PopularInstruct/PopularInstruct';
import Testimonial from '../../components/Utils/Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div className='mt-[110px]'>
            <Helmet>
                <title>Home | Summer Sports Academy</title>
            </Helmet>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
            <PopularInstruct></PopularInstruct>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;