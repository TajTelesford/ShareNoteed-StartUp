import React, { useState } from 'react'

const CreateCourse = ({ toggle }) => {
    const [showForm, setShowForm] = useState(false);

    const [ course_name, setCourseName ] = useState("");

    const handleButtonClick = () => {
      setShowForm(true);
      toggle(showForm);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
      toggle(showForm);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!course_name) return;
            const body = { course_name }

            console.log(body);

            await fetch('http://localhost:5000/home', {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(body) 
            })

            setCourseName("")
        } catch (err) {
            console.log(err);
        }

    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setCourseName(e.target.value);
    }

    return (
      <div className="position-fixed top-0 end-0 p-4">
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Create Course
        </button>
  
        {showForm && (
          <div className="position-fixed top-50 start-50 translate-middle">
            <div className="bg-light p-4 rounded shadow">
              {/* Your form JSX goes here */}
              <form 
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="courseName" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseName"
                    placeholder="Enter course name"
                    value={course_name}
                    onChange={handleInputChange}
                  />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={handleCloseForm}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
  )
}

export default CreateCourse