import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
    extraReducers: {
      "todo/addTodo": (state, action) => {
        state.message = "Todo is created !";
      },
    },
//   extraReducers: (builder) => {
//     builder.addCase(actions.add, (state, action) => {
//       state.message = "Todo is created !";
//     });
//     builder.addCase(actions.toggle, (state, action) => {
//       state.message = "Task completed !";
//     });
//   },
      
});

export const notificationReducer = notificationSlice.reducer;
export const resetnotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
