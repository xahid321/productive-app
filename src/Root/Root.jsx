import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';
import ButtonComponent from '../components/common/ButtonComponent';

import Icon from '../assets/demo-app (4).webp';

function Root() {
    // const IconComp = () => {
    //     return (
    //         <img
    //             className='h-32 w-32'
    //             src={Icon}
    //         />
    //     );
    // };
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            {/* 
            <ButtonComponent className={'w-[250px]'}>Demo Button</ButtonComponent>
            <ButtonComponent
                icon={<IconComp />}
                className={'w-[250px] mt-4 '}>
                Demo Button
            </ButtonComponent> */}
        </div>
    );
}

export default Root;
