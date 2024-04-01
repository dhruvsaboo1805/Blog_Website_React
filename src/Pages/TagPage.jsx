import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import { AppContext } from '../context/AppContext';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`min-h-screen  ${isDarkMode ? 'text-white bg-[#333333]' : 'text-black'}`}>
      <Header />

      <div className="relative">
        <button className={`absolute top-[90px] left-[130px] w-[50px] border p-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white text-black'}`} onClick={() => navigation(-1)}>
          Back
        </button>

        <h2 className={`absolute top-[129px] left-[50%] transform -translate-x-1/2 font-bold mt-2 text-xl`}>
          Blogs Tagged <span className={`text-blue-700 ml-1 ${isDarkMode ? 'text-blue-300' : ''}`}>#{tag}</span>
        </h2>

        <div className='flex justify-center'>
          <div className='w-full max-w-[670px] mt-[170px] md:mt-[110px] sm:mt-[110px]'>
            <Blogs />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default TagPage;
