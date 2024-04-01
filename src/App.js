import React, { useContext, useEffect} from "react"
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { AppContext } from "./context/AppContext"
import { Routes , Route, useSearchParams, useLocation } from "react-router-dom"
import "./App.css";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage"


export default function App() {
  const {fetchBlogsPost , isDarkMode, setIsDarkMode} = useContext(AppContext);
 
  const [searchParams , setsearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( () => {
    
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsPost(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogsPost(Number(page), null, category);
    }
    else {
      fetchBlogsPost(Number(page));
    }

    const darkModePreference = JSON.parse(localStorage.getItem("darkMode"));
    if (darkModePreference !== null) {
      setIsDarkMode(darkModePreference);
    }
  } , [location.pathname , location.search]);
  
  return (
   <div className={` App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/blog/:blogId" element = {<BlogPage></BlogPage>}></Route>
        <Route path = "/tags/:tag" element = {<TagPage></TagPage>}></Route>
        <Route path = "/categories/:category" element = {<CategoryPage></CategoryPage>}></Route>
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
   </div>
  )
}

