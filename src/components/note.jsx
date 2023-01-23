import React from "react";
import "../styles/notes.css";

function Note(props) {
  return (
    <div className="card">
      <div className="innerc">
        <h1 className="text">{props.title}</h1>
        <hr/>
        <p className="text">{props.content} </p>
      </div>
    </div>
  );
}

export default Note;
