import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page , handlePageChange , totalPage , isDarkMode} = useContext(AppContext);
  return (
    <div className={`w-full flex justify-center items-center fixed bottom-0 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black border-2'} py-2 `}>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
        {
          page > 1 && 
          <button className = "rounded-md px-4 py-1 border"onClick = {() => {handlePageChange(page - 1)}}>
            Previous
          </button>
        }

        {
          page < totalPage && 
          <button className = "rounded-md px-4 py-1 border" onClick = {() => {handlePageChange(page + 1)}}>
            Next
          </button>
        }
        </div>
        

        <p className='font-bold text-sm mt-1'>
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  )
}

export default Pagination
