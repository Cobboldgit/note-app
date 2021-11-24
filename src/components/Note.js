import React from "react";
import { connect } from "react-redux";
import {deleteNote} from "../actions/noteActions"

function Note(props) {
  const notes = props.note;
  return (
    <div>
      {/* <h4>{notes.title}</h4>
      <p>{notes.text}</p> */}
      <button onClick={console.log("eidt")}>Edit</button>
      <button onClick={() => props.deleteNote}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
};

export default connect(null, mapDispatchToProps)(Note);
