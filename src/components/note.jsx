import React from "react";
import "../styles/notes.css";

function Note(props) {
  return (
    <div className="note">
      <div className="innerc">
        <h1 className="text">{props.title}</h1>
        <hr/>
        <p  className="text">{props.content} </p>
        <button onClick={()=>{
          props.onDelete(props.id)
        }}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
