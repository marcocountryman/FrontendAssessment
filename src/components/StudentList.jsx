import React from 'react';
import StudentListItem from './StudentListItem';

function StudentList({ students, searchWord, searchTag, setStudents, addTagToStudentList }) {
    
    //Check search paramameters against firstname, lastname, and full name

    function nameChecker(firstName, lastName, searchWord) {
        const checkFirstName = firstName.toLowerCase();
        const checkLastName = lastName.toLowerCase();
        const checkSearch = searchWord.toLowerCase();
        const fullName = checkFirstName + " " + checkLastName;
        
        for(let i = 0; i < checkSearch.length; i++) {
            if(checkSearch[i] !== checkFirstName[i] && checkSearch[i] !== checkLastName[i] && fullName[i] !== checkSearch[i] ) return false;
        }
        return true;
    }
    //Checks search tag parameters against tags in key of tag

    function hasTag (tags, searchTag) {
        const checkTag = searchTag.toLowerCase();

       for(let tag of tags) {
           if (checkTagHelper(tag.toLowerCase(),checkTag)) return true
       }
       return false
    }

    function checkTagHelper(tag, searchTag) {

        for(let i = 0; i < searchTag.length; i++) {
            if(searchTag[i] !== tag[i]) return false;
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
        }).filter( (student) => {

            if(!searchTag.length) {
                return student;
            } else if (hasTag(student.tags, searchTag)) {
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