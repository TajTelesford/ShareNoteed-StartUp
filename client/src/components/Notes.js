import React, { useState, useEffect } from 'react'

const Notes = ({ note_name }) => {

  return (
    <div className="note-container">
      <div className="folder-icon">
        {/* You can replace this with an actual folder icon */}
        <span>F</span>
      </div>
      <div className="note-name">{note_name}</div>
    </div>
  );

}

export default Notes