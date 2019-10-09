import React from 'react';
import './App.css';

// components
import { TodoCard } from "./components/TodoCard"
import { TodoForm } from "./components/TodoForm"


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <TodoForm /> 
      <TodoCard />
    </div>
  );
}

export default App;
