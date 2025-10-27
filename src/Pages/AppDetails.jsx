import React from 'react';
import { useLoaderData } from 'react-router';

function AppDetails() {
    const AppData = useLoaderData();
    console.log(AppData);

    return (
        <div>
            <span> {AppData.title}</span>
            <span>{AppData.length}</span>
        </div>
    );
}

export default AppDetails;
