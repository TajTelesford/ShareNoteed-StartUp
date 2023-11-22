import React, { useState, useEffect } from 'react'

import SingleCourse from './SingleCourse';

const Courses = () => {

    const [ courses, setCourses ] = useState([]);

    const getCourses = async () => {

        try{
            const res = await fetch('http://localhost:5000/home');
            const data = await res.json();
            console.log(data);
            setCourses(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCourses();
    }, [])

  return (
    <div>
      {
        courses && courses.map((course)=>(
          <SingleCourse id={course.course_id} course_name={course.course_name} />
        ))
      }
    </div>
  )
}

export default Courses