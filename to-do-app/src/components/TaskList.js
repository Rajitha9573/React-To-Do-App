import React from 'react';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className='TaskList'>
      {tasks.map((task, index) => (
        <li key={index} className='ListElements'>
          {task}
          <button className='deleteBtn' onClick={() => onDelete(index)}>Delete</button>
        </li> 
      ))}
    </ul>
  );
};

export default TaskList;