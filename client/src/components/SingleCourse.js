import React from 'react'

const SingleCourse = ({ id, course_name }) => {
  return (
    <div>
        <span>{`Course ID ${id}`}</span>
        <strong>
            <p>{course_name}</p>
        </strong>
    </div>
  )
}

export default SingleCourse