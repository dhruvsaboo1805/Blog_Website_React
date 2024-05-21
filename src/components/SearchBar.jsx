import React, { useContext } from 'react'
import "./SearchBar.css";
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

const SearchBar = () => {
    const[serachQuery , setSerachQuery] = useState('');
    const {fetchBlogsPost} = useContext(AppContext);

    const handleSearch = (e) => {
        setSerachQuery(e.target.value);
        fetchBlogsPost(1, null, null, e.target.value);
    };
  return (
    <div className='searchBar'>
       <input type="text" id="search-bar" placeholder="Search the blogs..." value={serachQuery}
        onChange={handleSearch}></input>
    </div>
  )
}

export default SearchBar
