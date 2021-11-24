const initialState = {
  notes: [],
};

const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      const filterNote = state.notes.filter((note) => {
        return note.id !== action.payload;
      });
      return { ...state, notes: filterNote };
    case "EDIT_NOTE":
      const updateNote = state.notes.map((note) => {
        if (note.id === action.payload.noteId) {
          return action.payload.updateNote;
        }
        return note;
      });
      return { ...state, notes: updateNote };
    default:
      return state;
  }
};

export default noteReducers;
