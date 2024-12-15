import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ToggleSwitch from '../Fields/ToggleSwitch';

const CmsSidebar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const isAdmin = true;

    const handleToggle = () => {
        if (isAdmin) {
            setIsToggled(!isToggled);
        }
    };

    return (
        <div className="w-64 bg-gray-700 text-white h-full p-4 rounded-sm">
            <div className="flex flex-row w-full mx-auto justify-evenly mb-8">
                {isAdmin ? (
                    <div className="flex">
                        <h2 className="text-xl text-white mr-4">CMS Actions</h2>
                        <ToggleSwitch
                            value={isToggled}
                            onChange={handleToggle}
                            label={isToggled ? 'Org' : 'User'}
                        />
                    </div>
                ) : (
                    <h2 className="text-xl text-white mr-4">CMS Actions</h2>
                )}
            </div>

            {!isToggled ? (
                <ul>
                    <li className="mb-2">
                        <NavLink to="/cms/create" className={({ isActive }) =>
                            `hover:bg-gray-500 p-2 block rounded ${isActive ? 'bg-blue-400 text-white' : 'bg-transparent text-white'}`}>
                            Create Ticket
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/opentickets" className={({ isActive }) =>
                            `hover:bg-gray-500 p-2 block rounded ${isActive ? 'bg-orange-600 text-white' : 'bg-transparent text-white'}`}>
                            Open Tickets
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/enduserresponse" className={({ isActive }) =>
                            `hover:bg-gray-500 p-2 block rounded ${isActive ? 'bg-orange-600 text-white' : 'bg-transparent text-white'}`}>
                            Ticket Waiting Response
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/onhold" className={({ isActive }) =>
                            `hover:bg-gray-500 p-2 block rounded ${isActive ? 'bg-orange-600 text-white' : 'bg-transparent text-white'}`}>
                            Ticket on Hold
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className="mb-2">
                        <NavLink to="/cms/feedbackpending" className={({ isActive }) =>
                            `hover:bg-gray-500 p-2 block rounded ${isActive ? 'bg-orange-600 text-white' : 'bg-transparent text-white'}`}>
                            Waiting Feedback
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/closed" className={({ isActive }) =>
                            `hover:bg-gray-500 p-2 block rounded ${isActive ? 'bg-orange-600 text-white' : 'bg-transparent text-white'}`}>
                            Closed
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CmsSidebar;
