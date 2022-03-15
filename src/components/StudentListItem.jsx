import React from "react";

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
        <div>
            <p>{student.firstName} {student.lastName}</p>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {averageGrade} %</p>
            <img src= {student.pic} alt="student-pic" />
        </div>
    )
}

export default StudentListItem;