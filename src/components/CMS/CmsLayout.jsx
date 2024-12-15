import React from 'react'
import CmsSidebar from './CmsSidebar'
import Profile from '../Home/Profile'
import { Outlet } from "react-router-dom";

export default  function CmsLayout() {
  return (
    <>
      <div className='flex flex-col bg-white-50 h-full'>
        <Profile/>
        <div className='flex h-full flex-row'>
            <CmsSidebar/>
            <div className='flex-1 h-auto bg-white-50'>
                <Outlet />
            </div>
        </div>
      </div>
    </>
  )
}


