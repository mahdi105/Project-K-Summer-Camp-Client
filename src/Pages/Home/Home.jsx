import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Utils/Hero/Hero';
import PopularClasses from '../../components/Utils/PopularClasses/PopularClasses';


const Home = () => {
    return (
        <div className='mt-[110px]'>
            <Helmet>
                <title>Home | Summer Sports</title>
            </Helmet>
            <Hero></Hero>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;