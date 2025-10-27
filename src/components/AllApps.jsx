import React, { use } from 'react';
import NormalTitle from './common/NormalTitle';
import ShortContent from './common/ShortContent';
import SingleApp from './SingleApp';
import { NavLink } from 'react-router';

function AllApps({ Apps }) {
    const AppData = use(Apps);

    return (
        <div className='w-[90%] m-auto pt-20'>
            <NormalTitle className={`pb-4`}>Trending Apps</NormalTitle>
            <ShortContent className={`text-center pb-6`}>Explore All Trending Apps on the Market developeded by us</ShortContent>
            <div className='grid grid-cols-4 gap-6'>
                {AppData.filter((app) => app.ratingAvg > 4.5).map((app) => (
                    <NavLink to={``}>
                        <SingleApp
                            key={app.id}
                            app={app}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default AllApps;
