import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu.jsx';

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 w-full">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="image/logo1.png"
              className="mr-3 h-12"
              alt="Logo"
              loading="lazy"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="/" className="flex items-center">
              <img
                src="image/notification.png"
                className="mr-6 h-6"
                alt="Notification Icon"
              />
            </Link>
            <Menu />
          </div>
        </div>
      </nav>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block py-2 pr-4 pl-3 duration-200 text-orange-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                  : 'block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dms"
              className={({ isActive }) =>
                isActive
                  ? 'block py-2 pr-4 pl-3 duration-200 text-orange-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                  : 'block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
              }
            >
              DMS
            </NavLink>
          </li>
          <li className="mb-2">
    <NavLink to="/kms" className={({ isActive }) =>
        "block py-2 pr-4 pl-3 duration-200 " + (isActive ? "text-orange-700" : "text-gray-700") + " border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
    }>
        KMS
    </NavLink>
</li>
<li className="mb-2">
    <NavLink to="/cms" className={({ isActive }) =>
        "block py-2 pr-4 pl-3 duration-200 " + (isActive ? "text-orange-700" : "text-gray-700") + " border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
    }>
        CMS
    </NavLink>
</li>
<li className="mb-2">
    <NavLink to="/dashboard" className={({ isActive }) =>
        "block py-2 pr-4 pl-3 duration-200 " + (isActive ? "text-orange-700" : "text-gray-700") + " border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
    }>
        Dashboard
    </NavLink>
</li>

        </ul>
      </div>
    </header>
  );
}