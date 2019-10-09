import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = ( { list, dispatch } ) => {
    

    return (
        <div>
            {console.log('LIST: ', list)}
            {list.tasks.map( task => <TodoCard key={task.id} task={task} dispatch={dispatch}/>) }
            <button onClick=''></button>
        </div>
    )
}