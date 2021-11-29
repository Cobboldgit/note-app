import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addNote } from "../actions/noteActions";

function NoteForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text || title) {
      let note = {
        text,
        title,
        id: uuid(),
      };

      props.addNote(note);

      setText("");
      setTitle("");
    }
  };

  let numberOfNotes = props.notes.length;
  let numberOfNotesText;

  if (numberOfNotes === 0) {
     (numberOfNotesText = "You have no notes");
  } else if (numberOfNotes === 1) {
     (numberOfNotesText = `You have ${numberOfNotes} note`);
  } else if (numberOfNotes > 1) {
     (numberOfNotesText = `You have ${numberOfNotes} notes`);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs">
          <p>{numberOfNotesText}</p>
          <input
            placeholder="Enter Title"
            type="text"
            name="fullname"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here"
          />
        </div>
        <div className="Add">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
