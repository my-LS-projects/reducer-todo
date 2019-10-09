// reducer boilerplate
// const reducer = ( state, action ) {
//     switch(action.type) {
//         default:
//             return state
//     }
// }


export const initialState = {
    tasks: [
        {
            id: Date.now(),
            task: 'Task 1',
            completed: false,
        }
    ]
}

export const reducer = ( state, action ) => {
    // switch
    switch(action.type) {
        case "ADD_TASK":
            return {
                tasks: [
                    ...state.tasks, { id: Date.now(), task: action.payload, completed: false }
                ]
            }
        case "MARK_COMPLETED":
            return {
                tasks: state.tasks.map( task => 
                        task.id === action.payload
                        ? { ... task, completed: !task.completed } 
                            : task
                            )
                
            }
        case "REMOVE_COMPLETED":
            return {
                tasks: state.tasks.filter( task => !task.completed )
            }
        default:
            return state
    }
}