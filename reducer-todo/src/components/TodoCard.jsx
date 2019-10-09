import React from 'react'


export const TodoCard = ( { task, dispatch }) => {

    const markCompleted = () => {
        const element = document.getElementById(`${task.task}`)
        element.classList.toggle('completed')
        dispatch ( { type: 'MARK_COMPLETED', payload: task.id } )
    }

    return (
        <div className='todo-card'>
            <h3 onClick={markCompleted} id={task.task}>{task.task}</h3>
        </div>
    )
}