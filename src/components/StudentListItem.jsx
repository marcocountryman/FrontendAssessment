import React, { useState, useMemo } from "react";
import './StudentListItem.css';

function StudentListItem({student, addTagToStudentList }) {

    const [ toggle, setToggle ] = useState(true);
    const [ tag, setTag ] = useState("");
    
    function calcAverage(grades) {

        let sum = 0;
        for(let grade of grades) {
            sum += Number(grade)
        }
        return sum / grades.length
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTagToStudentList(student.id,tag);
        setTag("");
    }
 
    const averageGrade = useMemo(() => calcAverage(student.grades), student.grades);

    let renderTags = student.tags.length > 0 ? 
    student.tags.map( (tag,idx) => {
        return (
            <li key = {`tag-${idx}`} className = "tag-item">
                <div className = "tag-text">
                    {tag}
                </div>
            </li>
        )
    }) : null;

    let toggleIcon = toggle ? <button onClick = {() => setToggle(false)} className = "toggle-butn">+</button> : 
    <button onClick = {() => setToggle(true)} className = "toggle-butn">-</button>

    let gradeList = !toggle ? 
    student.grades.map( (grade,idx) => {
        console.log(student)
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
                    <ul className = "tag-item-container">{renderTags}</ul>

                    < form className = "input-tag-container" onSubmit = {(e) => handleSubmit(e)}>
                        <input type="text" 
                        className = "input-tag"
                        placeholder="Add a tag" 
                        onChange = {(e) => {setTag(e.target.value)}}
                        value = {tag}
                        />
                    </form>
                </div>

            </div>
            
            {toggleIcon}
        </div>
    )
}

export default StudentListItem;