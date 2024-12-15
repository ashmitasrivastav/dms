import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ToggleSwitch from '../Fields/ToggleSwitch';

const DmsSidebar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const isAdmin = true;

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="w-64 bg-gray-700 text-white h-full p-4 rounded-sm">
            <div className="flex flex-row w-full mx-auto justify-evenly mb-8">
                <h2 className="text-xl text-white mt-2">DMS Actions</h2>
                <ToggleSwitch 
                    value={isToggled} 
                    onChange={handleToggle} 
                    label={isToggled ? "Org" : "User"} 
                />
            </div>

            {isToggled ? (
                <ul>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/mydocuments" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 My Documents
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/pendingdocuments" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Pending Documents
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/opentickets" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Employer Documents
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/opentickets" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Documents Expiring Within One Month
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/opentickets" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Documents Expired
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/openticket" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Create Document
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/enduserresponse" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Get Documents
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/create" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Get All Documents
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/feedbackpending" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Country Folder
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/closed" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Company Code Folder
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink 
                            to="/cms/closed" 
                            className={({ isActive }) =>
                                `hover:bg-gray-500 p-2 block rounded ${
                                    isActive ? "bg-orange-600 text-white" : "bg-transparent text-white"
                                }`
                            }
                        >
                            📁 Department Wise
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DmsSidebar;
