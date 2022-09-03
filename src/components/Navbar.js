import React, { useState } from 'react';
import { close, logo, menu } from '../assests/assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full py-6 flex justify-between items-center '>
      <img src={logo} alt="hooBank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${i === navLinks.length - 1 ? 'mr-0':'mr-10'}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
      ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end item-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-cover'
          onClick={()=>setToggle((prev)=>!prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
        `}>
          <ul className='list-none flex flex-col  justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${i === navLinks.length - 1 ? 'mb-0' : 'mb-5'}`}
              >
                <a href={`#${nav.id}`} onClick={()=>setToggle((prev)=>!prev)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </nav>
  )
}

export default Navbar