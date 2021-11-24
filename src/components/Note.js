import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { deleteNote, editNote } from "../actions/noteActions";
import { Modal, Button } from "react-bootstrap";

function Note(props) {
  const [text, setText] = useState(props.note.text);
  const [title, setTitle] = useState(props.note.title);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  const handleAdd = (e) => {
    e.preventDefault();

    let editNote = {
      text,
      title,
      id: props.note.id,
    };

    toggleModal();
    
    props.editNote(props.note.id, editNote);
  };

  return (
    <div>
      <h4>{props.note.title}</h4>
      <p>{props.note.text}</p>
      <button onClick={() => toggleModal()}>Edit</button>
      <button onClick={() => props.deleteNote}>Delete</button>

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <button onClick={handleAdd}>ADD</button>
            <Button variant="secondary" onClick={() => toggleModal()}>
              Close
            </Button>
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
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
  editNote,
};

export default connect(null, mapDispatchToProps)(Note);
