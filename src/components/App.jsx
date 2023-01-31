import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateArea from "./createArea";

function App() {
  const [storedKeeperNotes, showKeeperNotes] = useState([]);

  const handleClick = (keeperNotes) => {
    showKeeperNotes((previousItems) => {
      return [...previousItems, keeperNotes];
    });
  };
  const onDelete =(id)=>{
    showKeeperNotes((previousItems)=>{
      return(previousItems.filter((item,index)=>{
        return id !== index
      }))
    })
  }
  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      {storedKeeperNotes.map((note, i) => {
        return (
          <div key={i}>
            <Note key={i} id={i} title={note.title} content={note.content} onDelete={onDelete}/>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
