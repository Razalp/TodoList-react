import React, { useState } from 'react';
import AddTask from './AddTask';
import List from './List';
import './todoapp.css';

const Todo = () => {
  const [tasks, settask] = useState([]);
  const [errorMsg, setmsg] = useState('');

  const addTask = (title) => {
    const taskExists = tasks.some((task) => task.title === title);
    if (!taskExists) {
      const newTask = [...tasks, { title }];
      settask(newTask);
      setmsg('');
    } else {
      setmsg('Task already exists!');
      setTimeout(() => {
        setmsg('');
      }, 2000); 
    }
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    settask(newTask);
  };

  return (
    <>
      <div className='todo-continer'>
        <div className='header'>TODO APP 🎗️</div>
        <div className='add-task'>
         
          <AddTask addTask={addTask} />
          {errorMsg && (
            <div className='error-message'>
              {errorMsg}
            </div>
          )}
        </div>
        <div className='tasks'>
          {tasks.map((task, index) => (
            <List key={index} task={task} index={index} removeTask={removeTask} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
