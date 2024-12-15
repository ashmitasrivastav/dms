import React from 'react';

function MenuItem({
    className = "",
    image="",
    label,
}) {
    return (
        <div className={`flex flex-row mt-5 ${className}`}>
            <img src={image} className="w-5 h-5" alt="" loading="lazy"/>
            {label}
        </div>
    );
}

export default MenuItem;
