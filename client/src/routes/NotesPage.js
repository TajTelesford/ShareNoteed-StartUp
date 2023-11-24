import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Notes from "../components/Notes";
import NavBar from "../NavBarComponents/NavBar";

import "../components/ComponentCss/NotePage.css";
import CreateNote from "../components/CreateNote";

const NotesPage = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({
    note_id: '',
    isClicked: false
  });
  const { course_id } = useParams();

  useEffect(() => {
    const getNotes = async () => {
      const res = await fetch(`http://localhost:5000/home/${course_id}/notes`);
      const data = await res.json();

      console.log(listOfNotes);

      setListOfNotes(data);
    };

    getNotes();
  }, [course_id]);

  
  const handleDoubleClick = async (e) => {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <CreateNote course_id={course_id} addNewNote={setListOfNotes} setActiveNote={setActiveNote} />
      </div>

      <div className="folder">
        <div className="note-tab">Folder Name</div>
        <div className="note-content">
          {listOfNotes.map((note) => (
            <div
              key={note.note_id}
              className={`note-tab ${
                activeNote.note_id === note.note_id ? "active-tab" : ""
              }`}
              onClick={() => 
                setActiveNote(
                  activeNote.note_id === note.note_id ? // If we clicked the same note now its not active anymore
                  { note_id: '', isClicked: false } :
                  { note_id: note.note_id, isClicked: true }
                )}
              onDoubleClick={handleDoubleClick}
            >
              {note.note_name}
            </div>
          ))}
          {activeNote.isClicked && (
            <div key={activeNote.note_id} className="active-note-content">
              <Notes
                note_id={activeNote.note_id}
                course_id={course_id}
                note_name={
                  listOfNotes.find((note) => note.note_id === activeNote.note_id)
                    .note_name
                }
                setListOfNotes={setListOfNotes}
                setActiveNote={setActiveNote}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
