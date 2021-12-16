import React from 'react'

function TodoItem({todo}) {
    return (
        <div>
            <h4>
                {todo.title}
            </h4>
            <p>
                {todo.desc}
            </p>
            <button type="button" class="btn btn-danger">Delete</button>
        
        </div>
    )
}

export default TodoItem
