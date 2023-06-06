import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  //early return
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 border w-48'>
      <ul className='px-2 text-base w-full'>
        <li className='hover:bg-gray-100  py-1'>
          <Link to="/">
            Home
          </Link>
        </li>
        <li className='hover:bg-gray-100  py-1'>Shorts</li>
        <li className='hover:bg-gray-100  py-1'>Subscriptions</li>
        <li className='hover:bg-gray-100  py-1'>Originals</li>
      </ul>

      <ul className='px-2 text-base'>
        <li className='hover:bg-gray-100  py-1' >Library</li>
        <li className='hover:bg-gray-100  py-1'>Shorts</li>
        <li className='hover:bg-gray-100  py-1'>Subscriptions</li>
        <li className='hover:bg-gray-100  py-1'>Library</li>
      </ul>

    </div>
    )
}

export default HamburgerMenu; 