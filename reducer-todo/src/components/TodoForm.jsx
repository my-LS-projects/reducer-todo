import React, { useState } from 'react'


export const TodoForm = ( {dispatch} ) => {
    const [ task, setTask ] = useState('')

    const handleChange = e => {
        setTask(e.target.value)
    }

    return (
        <form className='todo-form' onSubmit={ e => {
            e.preventDefault()
            dispatch({ type: 'ADD_TASK', payload: task}) 
        }}>
            {console.log('FORM PROPS: ', dispatch)}
            <label htmlFor='task'>
                <input type='text' name='task' value={task} placeholder='Task title...' onChange={handleChange}></input>
            </label>
            <button type='submit'>Create task</button>
        </form>
    )
}