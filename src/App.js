import React,{ useState, useEffect } from 'react';
import StudentList from './Components/StudentList';
import "./Components/StudentList.css";
import SearchBar from './Components/SearchBar';

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

        <SearchBar setSearchWord = {setSearchWord}/>
        <StudentList students = {students} searchWord = {searchWord}/>
        
      </div>

    </div>
  );
}

export default App;
