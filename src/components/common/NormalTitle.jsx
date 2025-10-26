import React from 'react';

function NormalTitle({ children, className }) {
    return <div className={`font-bold text-5xl text-center ${className}`}>{children}</div>;
}

export default NormalTitle;
