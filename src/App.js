import React,{ useState, useEffect } from 'react';
import StudentList from './Components/StudentList';
import "./Components/StudentList.css";

function App() {
  const [ students, setStudents ] = useState([]);
  const [ searchWord, setSearchWord ] = useState("");

  useEffect( () => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => setStudents(data.students))
    }, []);
  
  return (
    <div className="App">
      
      <div className = "student-list-container">

        <div className = "search-bar">
          <input 
          type = "text"
          className = "search-input"
          onChange = {(e) => {setSearchWord(e.target.value)}} 
          placeholder = "Search by name"/>
        </div>

        <StudentList students = {students} searchWord = {searchWord}/>
      </div>

    </div>
  );
}

export default App;
