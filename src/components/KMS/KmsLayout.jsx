import React from 'react';

import { Outlet } from 'react-router-dom';
import Profile from '../Home/Profile';
import KmsSidebar from './KmsSidebar';

export default function KmsLayout() {
    return (
        <>
            <div className='flex flex-col bg-green-50 h-full'>
                <Profile />
                <div className='flex h-full flex-row'>
                    <KmsSidebar />
                    <div className='flex-1 h-auto bg-white-50'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
