import React, { useState } from 'react';
import "./App.css"
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='App'>
      <h1>To-Do App</h1>
      <TaskInput onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      
    </div>
  );
}

export default App;
