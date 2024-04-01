import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();  // creation context

export default function AppContextProvider({children}){
    const [loading , setloading] = useState(false);
    const [posts , setposts] = useState([]);
    const [page , setpage] = useState(1);
    const [totalPage , settotalPage] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    // fill the data
    async function fetchBlogsPost(page = 1 , tag=null , category){
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            if (!data.posts || data.posts.length === 0)
            throw new Error("Something Went Wrong");

            setpage(data.page);
            setposts(data.posts);
            settotalPage(data.totalPages);
        }
        catch(error){
            console.log("error");

            setpage(1);
            setposts([]);
            settotalPage(null);
        }
        setloading(false);
    }

    function handlePageChange(page){
        navigate( { search: `?page=${page}`});
        setpage(page);
        
    }

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        // Optionally, save mode preference to local storage
        localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
      };

    // cantains the required data to sent(Provider)
    const value = {
        posts,
        setposts,
        loading,
        setloading,
        page,
        setpage,
        totalPage,
        settotalPage,
        fetchBlogsPost,
        handlePageChange,
        isDarkMode,
        setIsDarkMode,
        toggleMode
    };

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}