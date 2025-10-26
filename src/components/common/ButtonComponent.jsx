import React from 'react';

const ButtonComponent = ({ children, className, icon }) => {
    return (
        <div className={`px-8 py-2 flex gap-2 items-center  rounded bg-purple-700 ${className}`}>
            {icon && <div>{icon}</div>}
            {children}
        </div>
    );
};

export default ButtonComponent;
