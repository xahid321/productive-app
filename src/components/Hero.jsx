import React from 'react';
import Title from './common/Title';
import ShortContent from './common/ShortContent';
import Button from './Button';
import Image from './common/Image';
import { assets } from '../assets/asset';
import { NavLink } from 'react-router';

function Hero() {
    return (
        <div className='flex flex-col items-center gap-10'>
            <Title className={`text-7xl font-bold text-center`}>
                <span className='text-center'> We Build</span>
                <br /> <span className='text-purple-500'>Productive</span> App
            </Title>
            <ShortContent className={``}>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </ShortContent>
            <div className='flex gap-6'>
                <NavLink to='https://play.google.com/store/games?hl=en'>
                    <Button
                        className={`border border-black w-[200px]`}
                        icon={
                            <img
                                className='px-2'
                                src={assets.playstore}></img>
                        }>
                        Google Play
                    </Button>
                </NavLink>

                <NavLink to='https://www.apple.com/app-store/'>
                    <Button
                        className={`border border-black w-[200px]`}
                        icon={
                            <img
                                className='px-2'
                                src={assets.appstore}></img>
                        }>
                        App Store
                    </Button>
                </NavLink>
            </div>

            <Image src={assets.hero} />
        </div>
    );
}

export default Hero;
