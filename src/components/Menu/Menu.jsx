import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './ProfileImage';
import ProfileImage from './ProfileImage';
import MenuItem from './MenuItem';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Link to="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
                {/* Replace this with your existing menu icon */}
                <img src="image/menu.png" alt="Menu Icon" className="h-8 w-8" loading="lazy" />
            </div>
            {isMenuOpen && (
                <div className="menu-content absolute top-16 right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 flex-col flex w-60">
                    <ProfileImage
                        image="image/107291.JPG"
                        divClassName="p-0.5 max-w-28 max-h-28 rounded-full overflow-hidden flex items-center justify-center border border-black mx-auto"
                        imageClassName="w-full h-full object-cover rounded-full"
                    />
                    <MenuItem
                        label="Profile"
                        image="image/profile1.png"
                        className="hover:bg-red-500 py-2 px-4 hover:rounded mt-4 text-gray-400 hover:text-white"
                    />
                    <MenuItem
                        label="Change Password"
                        image="image/password1.png"
                        className="hover:bg-red-500 py-2 px-4 hover:rounded bg-white text-gray-400 hover:text-white"
                    />
                    <MenuItem
                        label="Log Out"
                        image="image/logout1.png"
                        className="hover:bg-red-500 py-2 px-4 hover:rounded mb-7 text-gray-400 hover:text-white"
                    />
                </div>
            )}
        </Link>
    );
}

export default Menu;
