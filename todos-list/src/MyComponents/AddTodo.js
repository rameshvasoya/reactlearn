import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc ){
            alert("Title or Description cannot Blank");
        }
        props.addTodo(title, desc);
    }
    return (
        <div className='container'>
            <div className="card text-dark bg-light mb-3 mt-3">
            <div className="card-header"><h2>Add a Todo</h2></div>
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Todo Title</label>
                            <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="text" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label JSX ="desc" className="form-label">Todo Description</label>
                            <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary"  >Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
