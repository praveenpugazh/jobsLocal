import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <div>
      <nav className='flex pl-10 mx-5 m-auto'>
        <div className='logo flex-1 items-center'>
          <img className='w-28' src={Logo} alt='logo' />
        </div>
        <div className='flex flex-1 items-center justify-around '>
          <p className='cursor-pointer'>Search jobs</p>
          <p className='cursor-pointer'>Post jobs</p>
          <p className='cursor-pointer'>About</p>
          <Link to='/login'>
            <button class='bg-purple-400 hover:bg-purple-500 rounded-lg py-2 px-4'>
              Login
            </button>
          </Link>
          <Link to='/signup'>
            <button class='bg-green-400 hover:bg-green-500 rounded-lg py-2 px-4'>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
