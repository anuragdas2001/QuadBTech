// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/notesReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
// const result = combineReducers({
//     todoReducer,
//     notesReducer
// })
export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },
  middleware: [loggerMiddleware]
});
