import React from 'react'
import Header from '../src/components/Header/Header'
import {Outlet}  from 'react-router-dom'

function Layout() {
  return (
    <>
     <div className='flex-1 flex-col h-screen'>
        <Header/>
        <div className='flex-1 h-full'>
            <Outlet />
        </div>
     </div>
    </>
  )
}

export default Layout
