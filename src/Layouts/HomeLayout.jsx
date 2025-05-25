import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <>
            <header className='w-full sticky top-0 z-50 bg-base-200 shadow-md dark:shadow-sm shadow-slate-300'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 md:container mx-auto mt-4 md:mt-6 min-h-[calc(100vh-290px)] md:min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;