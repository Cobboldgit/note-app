import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addNote } from "../actions/noteActions";

function NoteForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

<<<<<<< HEAD
  function handleSubmit(e) {
=======
 const handleSubmit = (e) => {
  e.preventDefault()

>>>>>>> 5c083483cc01eb2c698fe9f41fa20277e5e2f276
  let note = {
    text,
    title,
    id: uuid(),
  };

  props.addNote(note);

  setText("");
  setTitle("");
<<<<<<< HEAD
}
return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
    <button>ADD</button>
    <button>CLOSE</button>
    <input
    placeholder="Enter Title"
    type="text"
    name="fullname"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
     />


     <textarea  placeholder="Enter text here"> 
=======
 }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button>ADD</button>
        <button>CLOSE</button>
        <input
          placeholder="Enter Title"
          type="text"
          name="fullname"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

       
>>>>>>> 5c083483cc01eb2c698fe9f41fa20277e5e2f276
        
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text here"/>
      </form>
    </div>
<<<<<<< HEAD
)
};
const mapDispatchToProps = {
    addNote,
=======
  );
>>>>>>> 5c083483cc01eb2c698fe9f41fa20277e5e2f276
}

const mapDispatchToProps = {
  addNote
}

export default connect(null, mapDispatchToProps)(NoteForm);
