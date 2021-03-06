import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { deleteNote, editNote } from "../actions/noteActions";
import { Modal } from "react-bootstrap";

function Note(props) {
  const [text, setText] = useState(props.note.text);
  const [title, setTitle] = useState(props.note.title);
  const [showModal, setShowModal] = useState(false);

  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

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
      <h4 className="title">{props.note.title}</h4>
      <p>{props.note.text}</p>
      <i className="date">{dateTime}</i>
      <button onClick={() => toggleModal()} className="note-btn"><i className='fas fa-edit'>edit</i></button>
      <button onClick={() => props.deleteNote(props.note.id)} className="note-btn"><i className='fas fa-trash-alt'>del</i></button>

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton className="Modal-header">
          <Modal.Title><button onClick={handleAdd} className="note-btn"><i className='far fa-plus-square'>save</i></button></Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal-body">
          <form>
            
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
      </Modal>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
  editNote,
};

export default connect(null, mapDispatchToProps)(Note);
