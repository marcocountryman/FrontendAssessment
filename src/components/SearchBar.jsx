import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchWord }) {

    return(
        <div className = "search-bar">
            <input 
            type = "text"
            className = "search-input"
            onChange = {(e) => {setSearchWord(e.target.value)}} 
            placeholder = "Search by name"/>
        </div>
    )
}
export default SearchBar