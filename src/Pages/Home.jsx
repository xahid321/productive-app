import React, { Suspense } from 'react';
import Navbar from '../components/Header/Navbar';
import Hero from '../components/Hero';
import CountSection from '../components/Count/CountSection';
import AllApps from '../components/AllApps';

function Home() {
    const Apps = fetch('public/data.json').then((res) => res.json());

    return (
        <div>
            <Hero />
            <CountSection />
            <Suspense fallback={'Wait'}>
                <AllApps Apps={Apps} />
            </Suspense>
        </div>
    );
}

export default Home;
