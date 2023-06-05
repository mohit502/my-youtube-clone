import React from 'react'
import HamburgerMenu from './HamburgerMenu';
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex  mt-16 '>
      <HamburgerMenu />
      <Outlet />
    </div>
  )
}

export default Body