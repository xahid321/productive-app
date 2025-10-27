import React, { Suspense } from 'react';
import Navbar from '../components/Header/Navbar';
import Hero from '../components/Hero';
import CountSection from '../components/Count/CountSection';
import AllApps from '../components/AllApps';
import Button from '../components/Button';
import ButtonComponent from '../components/common/ButtonComponent';

function Home() {
    const Apps = fetch('public/data.json').then((res) => res.json());

    return (
        <div>
            <Hero />
            <CountSection />
            <Suspense fallback={'Wait'}>
                <AllApps Apps={Apps} />
            </Suspense>
            <div className='my-10'>
                <ButtonComponent className={`w-[145px] h-12 m-auto text-white`}>Show All</ButtonComponent>
            </div>
        </div>
    );
}

export default Home;
