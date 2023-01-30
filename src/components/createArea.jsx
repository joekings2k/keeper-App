import React ,{useState} from "react";

function CreateArea() {
  const [keeperNotes,SetKeeperNotes] =useState({
    title:"",
    content:""
  })

  const HandleOnchange =(event)=>{
    const {name, value}= event.target
    SetKeeperNotes((previousVals)=>{
      return{
        ...previousVals,
        [name]:value
      }
    })
    
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={keeperNotes.title} onChange ={HandleOnchange}/>
        <hr/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={keeperNotes.content} onChange ={HandleOnchange}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
