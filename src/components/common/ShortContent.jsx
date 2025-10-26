import React from 'react';

function ShortContent({ children, className }) {
    return <div className={`font-normal text-xl text-[#627382] ${className}`}>{children}</div>;
}

export default ShortContent;
