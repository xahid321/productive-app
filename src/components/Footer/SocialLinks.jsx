import React from 'react';
import { assets } from '../../assets/asset';

function SocialLinks() {
    return (
        <div>
            <p className='mb-2'>Social Links</p>
            <div className='flex gap-6 mb-4'>
                <img
                    className='w-[20px] h-[20px] bg-white rounded-full'
                    src={assets.facebook}
                    alt=''
                />
                <img
                    className='w-[20px] h-[20px] bg-white rounded-full'
                    src={assets.twitter}
                    alt=''
                />
                <img
                    className='w-[20px] h-[20px] bg-white rounded-full'
                    src={assets.linkedin}
                    alt=''
                />
            </div>
        </div>
    );
}

export default SocialLinks;
