import React from 'react';

function Title({ children, className }) {
    return <div className={` ${className}`}>{children}</div>;
}

export default Title;
