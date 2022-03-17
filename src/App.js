import React,{ useState, useEffect } from 'react';
import StudentList from './Components/StudentList';
import "./Components/StudentList.css";
import SearchBar from './Components/SearchBar';

function App() {
  const [ students, setStudents ] = useState([]);
  const [ searchWord, setSearchWord ] = useState("");
  
  //Add Tag keys to student list
  function addTagKey(data) {
    const newStudents = [...data.students]

    for(let student of newStudents) {
      student.tags = [];
    }
    setStudents(newStudents);
  }

  //Makes API call once App loads
  useEffect( () => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => addTagKey(data))
    }, []);
  
  function addTagToStudentList(id,tag) {
   
      const studentList = [...students];
      
        for(let student of studentList) {
 
            if (id === student.id) {
                student.tags.push(tag)
                break;
            }
        }
        setStudents(studentList)
  }
    
  return (
    <div className="App">
      
      <div className = "student-list-container">

        <SearchBar setSearchWord = {setSearchWord}/>
        <SearchBar/>
        <StudentList students = {students} searchWord = {searchWord} setStudents = {setStudents} addTagToStudentList = {addTagToStudentList}/>
        
      </div>

    </div>
  );
}

export default App;
