import { onSnapshot, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseInit/Firebase";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  todos: [],
};

//AsyncThunk
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue, getState }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));

      const todos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(todos);
      // Update the local Redux store state with fetched todos
     

      return todos;
    } catch (error) {
      console.error("[LOG]: todo/fetchTodos/rejected", error); // Log the error for debugging
      return rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (text, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        text,
        completed: false,
      });
      return { id: docRef.id, text, completed: false };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Creating Reducer using Redux Toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i == action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fetchTodos is fulfilled !");
        console.log(action.payload);
        console.log(state.todos);
        // state.todos = [...action.payload.data];
        state.todos = [...action.payload];
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        // console.log(action.payload); //The payload of the action (which is the response from the API)
        state.todos.push(action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;

export const todoActions = todoSlice.actions;

// selector
export const todoSelector = (state) => state.todoReducer.todos;
