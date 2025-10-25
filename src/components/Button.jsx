import React from 'react';

function Button({ name, className }) {
    return <button className={`px-4 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] border text-white ${className}`}>{name}</button>;
}

export default Button;
