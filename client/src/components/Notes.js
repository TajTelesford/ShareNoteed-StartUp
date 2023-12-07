import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Notes = ({ note_id, course_id, note_name, setListOfNotes, setActiveNote }) => {
  const deleteNote = async (e) => {
    e.preventDefault();

    console.log(`STUFF: ${note_id} ${course_id}`);

    const res = await fetch(
      `http://localhost:5000/home/${course_id}/${note_id}/notes`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    setListOfNotes(prev => 
      prev.filter(note => note.note_id !== note_id)
      );
    setActiveNote({ note_id: '', isClicked: false });
    console.log(res);
  };

  return (
    <div className="note-container">
      <div className="folder-icon">
        {/* You can replace this with an actual folder icon */}
        <span>F</span>
      </div>
      <div className="note-name">
        <h5>{note_name}</h5>
        <div>
          <Link 
            to={`/home/${course_id}/${note_id}/${note_name}/note`} 
            className="btn btn-success btn-sm"
            >
              Notes
            </Link>
          <button className="btn btn-danger btn-sm" onClick={deleteNote}>
            delete note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
