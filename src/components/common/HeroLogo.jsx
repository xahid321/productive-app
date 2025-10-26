import React from 'react';
import { assets } from '../../assets/asset';
import './HeroLogo.css';

function HeroLogo() {
    return (
        <div className='flex items-center gap-2'>
            <img
                className='w-10 h-10'
                src={assets.logo}
                alt=''
            />
            <span className='hero'>Hero.io</span>
        </div>
    );
}

export default HeroLogo;
