import React from 'react';
import HeroLogo from '../common/HeroLogo';
import SocialLinks from './SocialLinks';
import HorizontalLine from './HorizontalLine';

function Footer() {
    return (
        <div className='bg-[#001931] text-white'>
            <div className='flex justify-between px-20'>
                <HeroLogo />
                <SocialLinks />
            </div>

            <HorizontalLine />
            <div className='text-center mt-6 pb-6'>Copyright @2025 - All right reserved</div>
        </div>
    );
}

export default Footer;
