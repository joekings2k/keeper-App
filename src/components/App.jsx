import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import CreateArea from "./createArea";


const noteStyle ={
  display:"flex",
  justifyContent:"space-evenly",
  margin:"10px",
  flexWrap: "wrap",
}


function App() {

  const [storedKeeperNotes,showKeeperNotes ]=useState([])

  return (
    <div>
      <Header />
      <CreateArea />
      <div style={noteStyle}>
        <Note 
          title = "Note Title"
          content= "Note Content"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
