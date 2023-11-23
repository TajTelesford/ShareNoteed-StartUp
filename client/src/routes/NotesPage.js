import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import Notes from '../components/Notes';
import NavBar from '../NavBarComponents/NavBar';

import '../components/ComponentCss/NotePage.css'; 

const NotesPage = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const { course_id } = useParams();

  const getNotes = async () => {
    const res = await fetch(`http://localhost:5000/home/${course_id}/notes`);
    const data = await res.json();
    setListOfNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const [activeNote, setActiveNote] = useState(null);

  return (
    <div>

      <div>
        <NavBar />
      </div>

        <div className="folder">
          <div className="note-tab">Folder Name</div>
          <div className="note-content">
            {listOfNotes.map((note) => (
              <div
                key={note.note_id}
                className={`note-tab ${activeNote === note.note_id ? 'active-tab' : ''}`}
                onClick={() => setActiveNote(note.note_id)}
              >
                {note.note_name}
              </div>
            ))}
            {activeNote && (
              <div className="active-note-content">
                <Notes note_name={listOfNotes.find((note) => note.note_id === activeNote).note_name} />
              </div>
            )}
          </div>
        </div>

    </div>
  );
};

export default NotesPage;