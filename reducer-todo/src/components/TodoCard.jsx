import React from 'react'


export const TodoCard = ( { task, dispatch }) => {
    return (
        <div className='todo-card'>
            <div className="todo-text">
                <h3>Task...</h3>
            </div>
            <button>remove</button>
        </div>
    )
}