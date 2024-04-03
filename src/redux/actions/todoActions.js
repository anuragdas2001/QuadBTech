// Action constants.

export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "Toggle Todo";
export const DELETE_TODO = "Delete Todo";
// Action Creators
export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });
export const deleteTodo = (index) => ({ index, type: DELETE_TODO });
