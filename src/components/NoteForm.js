import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addNote} from "../actions/noteActions";

function NoteForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
  let note = {
    text,
    title,
    id:uuid(),
  };

  props.addNote(note);

  setText("");
  setTitle("");
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
        
     </textarea>

        </form>
    </div>
)
};
const mapDispatchToProps = {
    addNote,
}


export default connect (null, mapDispatchToProps)(NoteForm);