import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Utils/Hero/Hero';


const Home = () => {
    return (
        <div className='mt-[110px]'>
            <Helmet>
                <title>Home | Summer Sports</title>
            </Helmet>
            <Hero></Hero>
        </div>
    );
};

export default Home;