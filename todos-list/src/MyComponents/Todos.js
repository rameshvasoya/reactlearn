import React from 'react'
import TodoItem from './MyComponents/TodoItem'

function Todos(props) {
    return (
        <div className="container">
        <h2>Todos List</h2>
        {/* {props.Todos} */}
        <TodoItem todo={Todos}/>
        </div>
    )
}

export default Todos
