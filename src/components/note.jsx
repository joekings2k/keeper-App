import React from "react";
import "../styles/notes.css";

function Note() {
  return (
    <div className="card">
      <div className="innerc">
        <h1 className="text">This is the note title</h1>
        <hr/>
        <p className="text">This is the note content</p>
      </div>
    </div>
  );
}

export default Note;
