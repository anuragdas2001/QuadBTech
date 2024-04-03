// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
// const result = combineReducers({
//     todoReducer,
//     notesReducer
// })
export const store = configureStore({
  reducer: {
    todoReducer,
    notificationReducer,
  },
  middleware: [...getDefaultMiddleware(),loggerMiddleware]
});
