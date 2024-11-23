import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = ({setQuery}) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const handleSearch = () => {
        setQuery({
            title: searchTitle || "",
            category: searchCategory || ""
        })
    };

  return (
    <div className='search-container'>
        <input 
        className='input-box'
        placeholder='ENTER TITLE OR CATEGORY'
            type="text" 
            value={searchTitle} 
            onChange={(e) => setSearchTitle(e.target.value)} 
        />
        <select
            value = {searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
        >
            <option value="">All Categories</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
        </select>
        <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar