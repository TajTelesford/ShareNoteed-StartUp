import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import NotesPage from '../routes/NotesPage';


const SingleCourse = ({ id, course_name, setCourses }) => {

    const [ updating, setUpdating ] = useState(false);
    const [ newCourseName, setNewCourseName ] = useState("");

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        setUpdating(!updating);
    }

    const handleUpdatingCourseName = (e) => {
        e.preventDefault();
        setNewCourseName(e.target.value);
    }

    const handleUpdatedCourseName = async (e) => {
        e.preventDefault();

        try {
            if (!newCourseName) return;
            course_name = newCourseName;
            const body = { course_name };

            console.log(body);

            const res = await fetch(`http://localhost:5000/home/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            setCourses((prev) =>
                prev.map((course) =>
                    course.course_id === id
                        ? { ...course, course_name: newCourseName }
                        : course
            )
        );

            setUpdating(!updating)
            setNewCourseName("");

        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className="card">
        <div className="card-body d-flex flex-column align-items-center">
            <h5 
                className="card-title"
            >
                {!updating ?
                    course_name :
                    <div>
                        <input 
                        placeholder='New Course name'
                        value={newCourseName}
                        onChange={handleUpdatingCourseName}
                    />
                    <button 
                        className='btn btn-danger btn-sm' 
                        onClick={handleUpdatedCourseName}
                    >
                        Confirm
                    </button>
                    </div>
                    
                }
            </h5>
            <div className='mt-5' >
                <Link to={`/home/${id}/notes`} className="btn btn-success">
                    Notes
                </Link>
                <button 
                    className='btn btn-warning' 
                    onClick={handleUpdate}
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