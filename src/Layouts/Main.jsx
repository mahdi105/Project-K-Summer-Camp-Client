import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import '@smastrom/react-rating/style.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()
const Main = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
                <Toaster></Toaster>
            </QueryClientProvider>
        </>
    );
};

export default Main;