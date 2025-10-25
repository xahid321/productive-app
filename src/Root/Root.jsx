import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;
