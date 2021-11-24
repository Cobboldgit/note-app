import React from "react";
import { connect } from "react-redux";
import {deleteNote} from "../actions/noteActions"

function Note(props) {
  return (
    <div>
<<<<<<< HEAD
      {/* <h4>{notes.title}</h4>
      <p>{notes.text}</p> */}
      <button onClick={console.log("eidt")}>Edit</button>
=======
      <h4>{props.note.title}</h4>
      <p>{props.note.text}</p>
      <button onClick={() => {console.log("eidt")}}>Edit</button>
>>>>>>> 5c083483cc01eb2c698fe9f41fa20277e5e2f276
      <button onClick={() => props.deleteNote}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
};

export default connect(null, mapDispatchToProps)(Note);
