import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        HomeLayout
        <Outlet></Outlet>
        </>
    );
};

export default HomeLayout;