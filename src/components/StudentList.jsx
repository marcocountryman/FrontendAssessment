import React from 'react';
import StudentListItem from './StudentListItem';

function StudentList({ students }) {


    return(
        
        students.map( (student, idx) => {
            
            return (
                <StudentListItem key = {student.id} student = {student}/>
            )
        })
        
    )
}


export default StudentList