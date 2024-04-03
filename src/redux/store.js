import { todoReducer } from "./reducers/todoReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

export const store = configureStore({
  reducer: {
    todoReducer,
    notificationReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});
