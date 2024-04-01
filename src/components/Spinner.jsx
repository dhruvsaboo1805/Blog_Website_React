import React, { useContext } from 'react'
import "./Spinner.css"
import { AppContext } from '../context/AppContext'

const Spinner = () => {
    const {isDarkMode} = useContext(AppContext);
  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
      <div className="spinner">
      </div>
        <h3 className= {`font-bold mt-3 ${isDarkMode ? ('text-white') : ('text-black')}`}>Loading</h3>
    </div>
  )
}

export default Spinner
