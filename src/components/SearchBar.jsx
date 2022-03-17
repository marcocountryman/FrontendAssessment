import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchWord, setSearchTag, typeSearch}) {

    let searchComp = typeSearch.type === "name" ? 
      
        <input 
        type = "text"
        className = "search-input"
        onChange = {(e) => {setSearchWord(e.target.value)}} 
        placeholder = "Search by name"/>
         :
       
        <input 
        type = "text"
        className = "search-input"
        onChange = {(e) => {setSearchTag(e.target.value)}} 
        placeholder = "Search by tag"/>
       
    return(
        
        <div className = "search-bar">
           {searchComp}
        </div>
    )
}
export default SearchBar