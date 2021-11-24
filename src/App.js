import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { connect } from "react-redux";

function App() {
  return (
    <div>
      <NoteList/>
      <NoteForm/>
    </div>
  );
}

export default App;
