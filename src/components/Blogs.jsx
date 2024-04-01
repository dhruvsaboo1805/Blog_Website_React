import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {posts , loading , isDarkMode} = useContext(AppContext);
  
  return (
    <div className={`w-11/12 max-w-[670px] flex flex-col py-8 gap-y-10 mt-[65px] mb-[70px] ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {
        loading ? (<Spinner></Spinner>) : (
          posts.length === 0 ? 
          (<div>
            <p>No posts Found</p>
          </div>) : 
          (
            posts.map( (post) => (
              <BlogDetails key = {post.id} post = {post}></BlogDetails>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs
