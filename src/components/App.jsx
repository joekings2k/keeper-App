import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateArea from "./createArea";


function App() {

  const [storedKeeperNotes,showKeeperNotes ]=useState([])
  
  const handleClick = (keeperNotes) => {
    showKeeperNotes((previousItems) => {
      return [...previousItems, keeperNotes];
    });
  };

  return (
    <div>
      <Header />
      <CreateArea 
        handleClick={handleClick}
      />
      {storedKeeperNotes.map((note,i)=>{
        return(
          <div>
            <Note key ={i} title={note.title} content={note.content} />
          </div>
        )
        
      })}
      

      <Footer />
    </div>
  );
}

export default App;
