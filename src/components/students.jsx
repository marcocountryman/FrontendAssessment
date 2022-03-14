import React from 'react';

class Students extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
        this.calcAverage = this.calcAverage.bind(this);
    }

    componentDidMount() {
        fetch('https://api.hatchways.io/assessment/students')
            .then(res => res.json())
            .then(data => this.setState({students: data.students}))
    }
    
    calcAverage(nums) {
        let sum = 0;
        for(let num of nums) {
            sum += Number(num);
        }
        return sum / nums.length;
    }

    render() {
        if (!this.state.students.length) return null;

        const studentItems = this.state.students.map( (student, idx) => {
            const average = this.calcAverage(student.grades)

            return(
                <li>
                    <p>Email: {student.email}</p>
                    <p>Company: {student.company}</p>
                    <p>Skill: {student.skill}</p>
                    <p>Average: {average} %</p>
                    <img src= {student.pic} alt="" />
                </li>
            )
        })


        return (
            <div>
                <ul>
                    {studentItems}
                </ul>
            </div>
        )
    }
}
// const Students = () => {

//     return (
//         <div>
//             This is where the students will go
//         </div>
//     )
// }

export default Students