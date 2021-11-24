import React from "react";
import { connect } from "react-redux";
import {deleteNote} from "../actions/noteActions"

function Note(props) {
  return (
    <div>
      <h4>{props.note.title}</h4>
      <p>{props.note.text}</p>
      <button onClick={() => {console.log("eidt")}}>Edit</button>
      <button onClick={() => props.deleteNote}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
};

export default connect(null, mapDispatchToProps)(Note);
