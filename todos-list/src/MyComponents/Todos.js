import React from "react";
import TodoItem from "../MyComponents/TodoItem";

function Todos(props) {
  return (
    <div className="container">
      <h2>Todos List</h2>
      {/* {props.Todos} */}
      {props.todos.length === 0
        ? "No Todos Display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo}  key="uniqueId1" onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}

export default Todos;
