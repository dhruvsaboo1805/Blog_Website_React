import React, { useContext } from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className={`min-h-screen  ${isDarkMode ? 'text-white bg-[#333333]' : 'text-black'}`}>
      <div className=''>
        <Header></Header>
      </div>
      <div className='flex justify-center'>
        <div className='w-full max-w-[670px]'>
          <Blogs></Blogs>
        </div>
        <Pagination></Pagination>
      </div>
    </div>
  )
}

export default Home
