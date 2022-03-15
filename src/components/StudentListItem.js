import React from "react";
import './StudentListItem.css';

function StudentListItem({student}) {

    function calcAverage(grades) {
        let sum = 0;
        for(let grade of grades) {
            sum += Number(grade)
        }
        return sum / grades.length
    }
    
    const averageGrade = calcAverage(student.grades);

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
                </div>

            </div>
            

        </div>
    )
}

export default StudentListItem;