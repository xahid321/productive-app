import React from 'react';
import Count from './Count';
import NormalTitle from '../common/NormalTitle';

function CountSection() {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex justify-center'>
            <div className='p-20'>
                <NormalTitle className={`text-white py-4`}>Trusted BY Millions, Built For You</NormalTitle>
                <div className='gap-40 pt-4 sm:flex'>
                    <Count
                        p1={'Total Downloads'}
                        number={'29.6M'}
                        p2={'21% more than last month'}
                    />
                    <Count
                        p1={'Total Reviews'}
                        number={'906K'}
                        p2={'46% more than last month'}
                    />
                    <Count
                        p1={'Active Apps'}
                        number={'132+'}
                        p2={'31 more will Launch'}
                    />
                </div>
            </div>
        </div>
    );
}

export default CountSection;
