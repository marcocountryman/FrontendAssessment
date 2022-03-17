import React,{ useState, useEffect } from 'react';
import StudentList from './Components/StudentList';
import "./Components/StudentList.css";
import SearchBar from './Components/SearchBar';

function App() {
  const [ students, setStudents ] = useState([]);
  const [ searchWord, setSearchWord ] = useState("");
  const [ searchTag, setSearchTag ] = useState("");
  
  //Adds new key value pair to student objects => tags: []
  function addTagKey(data) {
    const newStudents = [...data.students]

    for(let student of newStudents) {
      student.tags = [];
    }
    setStudents(newStudents);
  }

  //Makes API call once App loads and add tag key
  useEffect( () => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => addTagKey(data))
    }, []);
  //Finds student by id and adds tags to student state variable
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

        <SearchBar setSearchWord = {setSearchWord} typeSearch = {{type: "name"}}/>
        <SearchBar setSearchTag = {setSearchTag} typeSearch = {{type: "tag"}}/>
        <StudentList students = {students} searchTag = {searchTag} searchWord = {searchWord} setStudents = {setStudents} addTagToStudentList = {addTagToStudentList}/>
        
      </div>

    </div>
  );
}

export default App;
