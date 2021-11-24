import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addNote } from "../actions/noteActions";

function NoteForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let note = {
      text,
      title,
      id: uuid(),
    };

    props.addNote(note);

    setText("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs">
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

const mapDispatchToProps = {
  addNote,
};

export default connect(null, mapDispatchToProps)(NoteForm);
