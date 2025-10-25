import React from 'react';
import { NavLink } from 'react-router';
import Button from '../Button';
import { assets } from '../../assets/asset';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className='flex justify-around'>
            <NavLink>
                <div className='flex items-center gap-2'>
                    <img
                        className='w-10 h-10'
                        src={assets.logo}
                        alt=''
                    />
                    <span className={style.hero}>Hero.io</span>
                </div>
            </NavLink>

            <div className='flex gap-10'>
                <NavLink>Home</NavLink>
                <NavLink>Apps</NavLink>
                <NavLink>Installation</NavLink>
            </div>
            <div>
                <NavLink>
                    <Button name={`Contribute`} />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
