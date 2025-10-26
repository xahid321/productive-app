import React from 'react';
import StarRating from './StarRating/StarRating';
import Star from './StarRating/Star';

function SingleApp({ app }) {
    function formatMillions(num) {
        if (num >= 10000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        return num.toString();
    }

    return (
        <div className='border gap-4 bg-[#D9D9D9] '>
            <div className='w-[348px] h-[435px] flex flex-col items-center relative left-8'>
                <div>
                    <img
                        className='p-4 h-[316px]'
                        src={app.image}
                        alt=''
                    />
                </div>

                <div className=''>
                    <p className=''>{app.title}</p>

                    <div className='flex justify-between mt-4'>
                        <p>{formatMillions(app.downloads)} </p>

                        <p className='flex'>
                            {app.ratings.map((r) => (
                                <StarRating>{r.name}</StarRating>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleApp;
