import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const {isDarkMode , toggleMode} = useContext(AppContext);

  return (
    <div className={`w-full shadow-md py-4 fixed top-0 z-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black border'}`}>
      <header className='text-center flex justify-around'>
        <h1 className='text-2xl font-bold uppercase mt-1'>Technology Blogs</h1>

        <button className={`rounded-full w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-500'} flex items-center justify-center focus:outline-none`} onClick={toggleMode}>
        {isDarkMode ? <MdLightMode fontSize={24} /> : <MdDarkMode fontSize={24} />}
        </button>
      </header>
    </div>
  )
}

export default Header
