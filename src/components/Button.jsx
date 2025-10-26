import React from 'react';

function Button({ children, className, icon }) {
    return (
        <button className={`px-4 py-3 flex items-center rounded-lg cursor-pointer ${className}`}>
            {icon}
            {children}
        </button>
    );
}

export default Button;
