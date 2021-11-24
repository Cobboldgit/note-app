import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

function noteList(props) {
  const notes = props.notes;
  return notes.map((note) => {
    return <Note note={note} key={note.id} />;
  });
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(noteList);
