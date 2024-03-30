import React, { useState } from 'react';
import { useStore } from '../../store/Conter';

const List = ({ task, index, removeTask }) => {
  const [isComplete, setIsComplete] = useState(false);
  const { count, inc } = useStore()
  const toggleComplete = () => {
    setIsComplete(!isComplete);
    console.log(count)
  };
  
  return (
    <>
      <div className={`Listtask ${isComplete ? 'completed' : ''}`}>
        <span style={{ textDecoration: isComplete ? 'line-through solid 2px' : 'none', fontWeight: isComplete ? 'bold' : 'normal' }}>
          {task?.title}
        </span>
        
        <div className="button-container">
          <button className={`other-btn ${isComplete ? 'tik-btn' : ''}`} onClick={toggleComplete}>
            {isComplete ? '❌' : '✔️'}
          </button>
          <button className="delete-btn" onClick={() => removeTask(index)}>
          🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
