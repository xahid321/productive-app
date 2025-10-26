import React, { use } from 'react';
import NormalTitle from './common/NormalTitle';
import ShortContent from './common/ShortContent';
import SingleApp from './SingleApp';

function AllApps({ Apps }) {
    const AppData = use(Apps);

    return (
        <div className='bg-[#D9D9D9] w-[90%] m-auto pt-20'>
            <NormalTitle className={`pb-4`}>Trending Apps</NormalTitle>
            <ShortContent className={`text-center pb-6`}>Explore All Trending Apps on the Market developeded by us</ShortContent>
            <div className='grid grid-cols-4 gap-6'>
                {AppData.map((app) => (
                    <SingleApp
                        key={app.id}
                        app={app}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllApps;
