import React from 'react';
import StudentListItem from './StudentListItem';

function StudentList({ students, searchWord }) {

    return(
        
        students.filter( (student) => {
            
            if (!searchWord.length) {
                return student;
            } else if (student.firstName.toLowerCase().includes(searchWord.toLowerCase()) || 
            student.lastName.toLowerCase().includes(searchWord.toLowerCase())) {
                return student;
            }
        }).map( (student, idx) => {
            
            return (
                <StudentListItem key = {student.id} student = {student}/>
            )
        })
        
    )
}


export default StudentList