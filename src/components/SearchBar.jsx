import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchWord, setSearchTag, typeSearch}) {

    let searchComp = typeSearch.type === "name" ? 
        <div className = "search-bar-name">
            <input 
            type = "text"
            className = "search-input"
            onChange = {(e) => {setSearchWord(e.target.value)}} 
            placeholder = "Search by name"/>
        </div>
         :
        <div className = "search-bar-tag">
            <input 
            type = "text"
            className = "tag-input"
            onChange = {(e) => {setSearchTag(e.target.value)}} 
            placeholder = "Search by tag"/>
        </div>
        
       
    return(
        <>
            {searchComp}
        </>
       
    )
}
export default SearchBar