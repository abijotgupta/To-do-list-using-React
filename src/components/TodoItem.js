import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="mb-4">
            <h6>{todo.title}</h6>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={ () => {onDelete(todo)}}>Delete</button><hr></hr>
        </div>
    )
}
