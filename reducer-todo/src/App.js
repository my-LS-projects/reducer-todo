import React, { useReducer } from 'react';
import './App.css';
import { initialState , reducer } from './reducers/TodoReducer'

// components
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'



// create card
// create form 
// map cards 
// reducer??



function App() {
  const [ taskList , dispatch ] = useReducer( reducer, initialState )

  return (
    <div className='App'>
      <h1>Todo List (using reducer)</h1>
      {console.log("TASK LIST:", taskList)}
      <TodoForm dispatch={dispatch}/> 
      <TodoList list={taskList} dispatch={dispatch}/>
    </div>
  );
}

export default App;
