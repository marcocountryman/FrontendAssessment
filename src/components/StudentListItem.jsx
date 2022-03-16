import React, { useState } from "react";
import './StudentListItem.css';

function StudentListItem({student}) {

    const [ toggle, setToggle ] = useState(true);
    
    function calcAverage(grades) {
        let sum = 0;
        for(let grade of grades) {
            sum += Number(grade)
        }
        return sum / grades.length
    }
    
    const averageGrade = calcAverage(student.grades);

    let toggleIcon = toggle ? <button onClick = {() => setToggle(false)} className = "toggle-butn">+</button> : 
    <button onClick = {() => setToggle(true)} className = "toggle-butn">-</button>

    let gradeList = !toggle ? 
    student.grades.map( (grade,idx) => {
        return(
            <li key = {`grade-${idx}`} className = "student-grade-list-item">
                <p>Test {idx+1}:</p>
                <p className = "grade">{grade}%</p>
            </li>
        )
    })
    : null;

    return(

        <div className = "student-profile">

            <div className = "student-image-container">
                <img src= {student.pic} alt="student-pic" className = "student-image"/>
            </div>
            
            <div className = "student-profile-info">
                <p className = "student-name">{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</p>
                
                <div className = "student-statistics">
                    <p>Email: {student.email}</p>
                    <p>Company: {student.company}</p>
                    <p>Skill: {student.skill}</p>
                    <p>Average: {averageGrade} %</p>
                    <ul className = "student-grade-list">{gradeList}</ul>
                </div>

            </div>
            
            {toggleIcon}
        </div>
    )
}

export default StudentListItem;