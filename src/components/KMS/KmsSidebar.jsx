import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ToggleSwitch from '../Fields/ToggleSwitch';

const KmsSidebar = () => {
    const [isToggled, setIsToggled] = useState(false);
    const isAdmin = true;

    const policies = ["Holiday", "Leave", "Immigration", "Code of Conduct", "Shift Allowance"];

    const handleToggle = () => {
        isAdmin ? setIsToggled(!isToggled) : setIsToggled;
    }

    return (
        <div className="w-64 bg-gray-700 text-white h-full p-4 rounded-sm">
            <div className="flex flex-row w-full mx-auto justify-evenly mb-8">
                <h2 className="text-xl text-white mr-4">DMS Actions</h2>
                <ToggleSwitch
                    value={isToggled}
                    onChange={handleToggle}
                    label={isToggled ? "Org" : "User"}
                />
            </div>

            {!isToggled ? (
                <ul>
                    {policies.map((policy) => (
                        <li key={policy} value={policy} className="mb-2 hover:bg-gray-500 p-2 block rounded">
                            {policy}
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li className="mb-2">
                        <NavLink to="/kms/draftpolicy" className={({ isActive }) =>
                            "hover:bg-gray-500 p-2 block rounded " + (isActive ? "bg-orange-600 text-white" : "bg-transparent text-white")
                        }>
                            ➜ Draft Policy
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/enduserresponse" className={({ isActive }) =>
                            "hover:bg-gray-500 p-2 block rounded " + (isActive ? "bg-orange-600 text-white" : "bg-transparent text-white")
                        }>
                            ➜ All Drafted Policies
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/create" className={({ isActive }) =>
                            "hover:bg-gray-500 p-2 block rounded " + (isActive ? "bg-orange-600 text-white" : "bg-transparent text-white")
                        }>
                            ➜ Waiting for Approval
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/published" className={({ isActive }) =>
                            "hover:bg-gray-500 p-2 block rounded " + (isActive ? "bg-orange-600 text-white" : "bg-transparent text-white")
                        }>
                            ➜ Published Policies
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/cms/feedbackpending" className={({ isActive }) =>
                            "hover:bg-gray-500 p-2 block rounded " + (isActive ? "bg-orange-600 text-white" : "bg-transparent text-white")
                        }>
                            ➜ Rejected Policies
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default KmsSidebar;
