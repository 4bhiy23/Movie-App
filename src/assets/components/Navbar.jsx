import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex text-white justify-between p-3 sticky top-0 z-50  items-center px-8 py-3 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md shadow-lg'>
        <button className="logo text-4xl">
            JSON-Flix
        </button>
        <ul className='flex gap-5 items-center'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </div>
  )
}

export default Navbar
