import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import { fetchTodos } from "../../redux/reducers/todoReducer";
import { DeleteTodo } from "../../redux/reducers/todoReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { resetnotification } from "../../redux/reducers/notificationReducer";
function ToDoList() {
  // const todos=useSelector((state)=> state.todoReducer.todos);
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;
  const message = useSelector(notificationSelector);
  if (message) {
    setTimeout(() => {
      dispatch(resetnotification());
    }, 2000);
  }
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(DeleteTodo(index));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
