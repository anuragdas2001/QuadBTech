import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { todoSelector } from "../../redux/reducers/todoReducer";

function ToDoList() {
  // const todos=useSelector((state)=> state.todoReducer.todos);
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;
  
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
                // console.log("[LOG]: Todo - Toggle Action dispatched");
                dispatch(actions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
