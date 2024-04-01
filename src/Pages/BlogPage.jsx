import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
// import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const { loading, setloading, isDarkMode } = useContext(AppContext);
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const blogId = location.pathname.split("/").at(-1);
    // console.log(blogId);

    async function fetchRelatedBlogs() {
        setloading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        // console.log(url);
        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("error");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setloading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div className={`min-h-screen  ${isDarkMode ? 'text-white bg-[#333333]' : 'text-black'}`}>
            <div className=''>
                <Header ></Header>
            </div>

            <div className='relative'>
            <button className={`absolute top-[90px] left-[130px] w-[50px] border p-1 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} onClick={() => navigation(-1)}>
                    Back
                </button>

            </div>

            {
                loading ?
                    (
                        <div>
                            <p>Loading</p>
                        </div>
                    )
                    :
                    blog ?
                        (<div className='flex flex-col justify-center items-center'>
                            <div className='w-full max-w-[670px] mt-[140px]'>
                                <BlogDetails post={blog}></BlogDetails>
                            </div>
                            <h2 className='text-2xl font-bold mt-8 mb-6'>Related Blogs</h2>
                            {
                                relatedblogs.map((post) => (
                                    <div className='w-full max-w-[670px] mb-[40px]' key={post.id}>
                                        <BlogDetails post={post}></BlogDetails>
                                    </div>
                                ))
                            }
                        </div>) : (<div>
                            <p>No Blogs Found</p>
                        </div>)
            }

        </div>
    )
}

export default BlogPage
