import React from 'react';
import StudentListItem from './StudentListItem';

function StudentList({ students, searchWord }) {

    //I need to check and make sure the names match starting from the first index
    function nameChecker(firstName, lastName, searchWord) {
        const checkFirstName = firstName.toLowerCase();
        const checkLastName = lastName.toLowerCase();
        const checkSearch = searchWord.toLowerCase();

        for(let i = 0; i < checkSearch.length; i++) {
            if(checkSearch[i] !== checkFirstName[i] && checkSearch[i] !== checkLastName[i] ) return false;
        }
        return true;
    }

    return(
        
        students.filter( (student) => {

            if (!searchWord.length) {
                return student;
            } else if (nameChecker(student.firstName,student.lastName,searchWord)) {
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