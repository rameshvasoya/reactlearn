import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <div className="card mb-3">
        <h5 className="card-header">{todo.sno}</h5>
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button
            href="#"
            className="btn btn-primary"
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
