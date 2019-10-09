import React from 'react';
import './App.css';

// components
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'



// create card
// create form 
// map cards 
// reducer??



function App() {
  return (
    <div className='App'>
      <h1>Todo List (using reducer)</h1>
      <TodoForm /> 
      <TodoList />
    </div>
  );
}

export default App;
