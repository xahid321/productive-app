import React from 'react';

function Count({ p1, number, p2 }) {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <p className='text-white font-normal text-[16px]'>{p1}</p>
            <p className='font-extrabold text-[64px] text-white'>{number}</p>
            <p className='text-white font-normal text-[16px]'>{p2}</p>
        </div>
    );
}

export default Count;
