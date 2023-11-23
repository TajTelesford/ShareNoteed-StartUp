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
    <div className='container'>
        <h2 className='text-center mt-5 mb-4'>Courses</h2>
        <div className="row mt-5 justify-content-center ">
            {
            courses && courses.map((course)=>(
            <div key={course.course_id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                <SingleCourse  
                    id={course.course_id} 
                    course_name={course.course_name}
                    setCourses={setCourses}
                />
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default Courses