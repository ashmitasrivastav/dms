import React from 'react'

import { Outlet } from 'react-router-dom'
import DmsSidebar from './DmsSidebar'
import Profile from '../Home/Profile'

export default function DmsLayout() {
    return (
        <>
            <div className='flex flex-col bg-green-50 h-full'>
                <Profile/>
                <div className='flex-1 flex-row h-full'>
                    <DmsSidebar/>
                    <div className='flex-1'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}
