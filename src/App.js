import { Fragment } from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import {store} from "./redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home/Home";


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            
          </Route>
          <Route path="todo"
          element={
            <Fragment>
             
             <h1>To Dos</h1>
              <TodoForm  />
              <TodoList />
            </Fragment>
          }>

          </Route>
          
        </Routes>
       
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
