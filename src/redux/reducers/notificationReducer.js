import { createSlice } from "@reduxjs/toolkit";
import { actions, addTodo } from "./todoReducer";

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
  extraReducers: (builder) => {
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.message = "Todos is created !";
    });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const resetnotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
