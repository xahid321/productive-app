import React from 'react';

function SingleApp({ app }) {
    function formatMillions(num) {
        if (num >= 10000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        return num.toString();
    }

    return (
        <div className='border gap-4'>
            <div className='w-[316px] h-[435px] flex flex-col'>
                <img
                    className='p-4'
                    src={app.image}
                    alt=''
                />
                <p className=''>{app.title}</p>
                <div>
                    <p>{formatMillions(app.downloads)} </p>
                    <p>{app.ratings.name}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleApp;
