import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import notes from "../notes";


const noteStyle ={
  display:"flex",
  justifyContent:"space-evenly",
  margin:"10px",
  flexWrap: "wrap",
}


function App() {
  return (
    <div>
      <Header />
      <div style={noteStyle}>
        {notes.map((note, i) => {
          return <Note key={i} title={note.title} content={note.content} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
