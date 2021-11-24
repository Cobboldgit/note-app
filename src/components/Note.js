import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions/noteActions";

function Note(props) {
  var today = new Date();
  var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  return (
    <div>
      <h4>{props.note.title}</h4>
      <p>{props.note.text}</p>
      <p>{dateTime}</p>
      <button
        onClick={() => {
          console.log("eidt");
        }}
      >
        Edit
      </button>
      <button onClick={() => props.deleteNote(props.note.id)}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
  editNote,
};

export default connect(null, mapDispatchToProps)(Note);
