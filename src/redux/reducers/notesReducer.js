import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    { text: "Learning Redux in React is fun", createdOn: new Date().toDateString() },
    { text: "Learning React is fun", createdOn: new Date().toDateString() },
  ],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({ text: action.payload, createdOn: new Date().toDateString() });
    },
    delete: (state, action) => {
      state.notes.map((note, i) => {
        if (i == action.payload) {
          state.notes.splice(i, 1);
        }
        // return note;
      });
    },
  },
});

export const noteReducer = noteSlice.reducer; //exports the reducer functions
export const actions = noteSlice.actions; //used by the components
//selector
export const notesSelector = (state) => state.noteReducer.notes;

// export function notesReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTES:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createdOn: new Date(),
//           },
//         ],
//       };
//     case DELETE_NOTES:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };
//     default:
//       return state;
//   }
// }
