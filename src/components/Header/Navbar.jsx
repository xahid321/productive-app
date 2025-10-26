import React from 'react';
import { NavLink } from 'react-router';
import Button from '../Button';
import { assets } from '../../assets/asset';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className='flex justify-around py-3'>
            <NavLink to={'/'}>
                <div className='flex items-center gap-2'>
                    <img
                        className='w-10 h-10'
                        src={assets.logo}
                        alt=''
                    />
                    <span className={style.hero}>Hero.io</span>
                </div>
            </NavLink>

            <div>
                <ul className='sm:flex gap-12 text-[16px] font-semibold '>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/apps'}>Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/installation'}>Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <NavLink>
                    <Button
                        className={`bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white`}
                        icon={
                            <img
                                className='w-10 h-auto stroke-current text-white'
                                src={assets.githubLogo}></img>
                        }>
                        Contribute
                    </Button>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
