import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import "./ToDoForm.css";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { resetnotification } from "../../redux/reducers/notificationReducer";
function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);
  // console.log(message)
  if (message) {
    setTimeout(() => {
      dispatch(resetnotification());
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    // console.log("[LOG]: Todo - Add Action dispatched");
    dispatch(actions.add(todoText));
  };

  return (
    <div className="container">
      {message ? (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
