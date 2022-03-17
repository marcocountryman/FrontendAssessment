import React, { useEffect } from 'react';
import StudentListItem from './StudentListItem';

function StudentList({ students, searchWord, setStudents, addTagToStudentList }) {

    function nameChecker(firstName, lastName, searchWord) {
        const checkFirstName = firstName.toLowerCase();
        const checkLastName = lastName.toLowerCase();
        const checkSearch = searchWord.toLowerCase();
        const fullName = checkFirstName + " " + checkLastName;
        console.log(students)
        for(let i = 0; i < checkSearch.length; i++) {
            if(checkSearch[i] !== checkFirstName[i] && checkSearch[i] !== checkLastName[i] && fullName[i] !== checkSearch[i] ) return false;
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
                <StudentListItem key = {student.id} student = {student} setStudents = {setStudents} addTagToStudentList = {addTagToStudentList}/>
            )
        })
    )
}


export default StudentList