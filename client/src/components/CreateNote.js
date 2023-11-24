import React, { useState } from 'react'

const CreateNote = ({ course_id, addNewNote, setActiveNote }) => {

    const [ showForm, setShowForm ] = useState(false);

    const [ notesFolderName, setNotesFolderName ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!notesFolderName) return;

            const note_name = notesFolderName;

            const body = { note_name };

            //console.log(body);

            const res = await fetch(`http://localhost:5000/home/${course_id}/notes`, {
                method: 'POST',
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(body) 
            });
            const data = await res.json();

            //console.log(data.note_id);
            const note_id = data.note_id

            addNewNote(prev => [...prev,  { note_name, note_id }]);

            setActiveNote({ note_id: '', isClicked: false })
            setNotesFolderName("");
            setShowForm(!showForm)

        } catch (err) {
            console.log(err);
        }

    };


    const handleClose = (e) => {
        e.preventDefault();
        setNotesFolderName("");
        setShowForm(!showForm);
    };

    const handleChange = (e) => {
        e.preventDefault();

        setNotesFolderName(e.target.value);
    }

  return (
    <div className='position-fixed top-0 end-0 p-4'  >
        <button 
            className='btn btn-primary' 
            onClick={() => setShowForm(!showForm)}
        >
            Create Notes
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
                    Notes Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseName"
                    placeholder="Enter note name"
                    value={notesFolderName}
                    onChange={handleChange}
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
                  onClick={handleClose}
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

export default CreateNote;