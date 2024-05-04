import React, { useState } from 'react';

const TaskInput = ({ onAddToDo }) => {
  const [task, setTask] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToDo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='SubmitButton'>
      <input
        className="TaskInput"
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />
      <button type="submit" className='button'>Add</button>
    </form>
  );
};

export default TaskInput;