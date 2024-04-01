import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const BlogDetails = ({post}) => {
  const {isDarkMode} = useContext(AppContext);

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-md`}>
      <NavLink to={`/blog/${post.id}`} >
        <span className={`font-bold text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{post.title}</span>
      </NavLink>
      <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        By
        <span className="italic">{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="font-semibold underline cursor-pointer">{post.category}</span>
        </NavLink>
      </p>
      <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}> Posted on {post.date} </p>
      <p className={`text-md mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}> {post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className={`font-bold text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-700'} underline mt-[5px]`}>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
