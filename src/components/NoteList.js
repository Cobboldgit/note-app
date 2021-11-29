import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

function noteList(props) {
  
  const notes = props.notes;

  return notes.map((note, index) => {
    return (
      <div key={index} className="text">
        <Note note={note} key={note.id} />
      </div>
    );
  });
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(noteList);
