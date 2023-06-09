import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import '@smastrom/react-rating/style.css'

const Main = () => {
    return (
        <>
        <Header></Header>
           <Outlet></Outlet> 
        <Footer></Footer>
        </>
    );
};

export default Main;