import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { AppContext } from '../context/AppContext';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const { isDarkMode } = useContext(AppContext);

    return (
        <div className={`min-h-screen  ${isDarkMode ? 'text-white bg-[#333333]' : 'text-black'}`}>
            <Header></Header>
            <div className='relative '>
                <button className={`absolute top-[90px] left-[130px] w-[50px] border p-1 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} onClick={() => navigation(-1)}>
                    Back
                </button>

                <h2 className={`absolute top-[129px] left-[50%] transform -translate-x-1/2 font-bold mt-2 text-xl ${isDarkMode ? 'text-white' : 'text-black'} `}>
                    Blogs on <span className={`text-blue-700 ${isDarkMode ? 'text-blue-300' : ''}`}>{category}</span>
                </h2>
            </div>

            <div className='flex justify-center'>
                <div className='w-full max-w-[670px] mt-[100px]'>
                    <Blogs></Blogs>
                </div>
                <Pagination></Pagination>
            </div>
        </div>
    )
}

export default CategoryPage
