import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileImage = ({
    image = "",
    imageClassName = "",
    divClassName = ""
}) => {

    return (
        <div className={`${divClassName}`}>
            <img src={image} alt="" className={`${imageClassName}`} loading="lazy" />
        </div>
    );
};

export default ProfileImage;
