import React from 'react'
import '../App.css'


const SingleCourse = ({ id, course_name, setCourses }) => {

    const handleDelete = async (e) => {
        e.preventDefault();
    
        try {

            await fetch(`http://localhost:5000/home/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            });
            
            setCourses(
                (prev) => prev.filter(
                    courses => courses.course_id !== id
                )
            );

        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className="card">
        <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{course_name}</h5>
            <div className='mt-5' >
                <button 
                    className='btn btn-success' 
                >
                    Enter
                </button>
                <button 
                    className='btn btn-warning' 
                >
                    Update
                </button>
                <button 
                    className='btn btn-danger' 
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default SingleCourse