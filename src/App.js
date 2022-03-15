import React,{ useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import "./components/StudentList.css";

function App() {
  const [ students, setStudents ] = useState([]);

  useEffect( () => {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => setStudents(data.students))
    }, []);
  
  return (
    <div className="App">
      
      <div className = "student-list-container">
        <StudentList students = {students}/>
      </div>

    </div>
  );
}

export default App;
