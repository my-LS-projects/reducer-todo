import React from 'react'


export const TodoForm = () => {
    return (
        <form className="todo-form">
            <label htmlFor="task">
                <input type="text" name="task" value="" placeholder="Task title..." onChange=""></input>
            </label>
            <button>Create task</button>
        </form>
    )
}