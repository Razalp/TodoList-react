import React, { useState } from 'react';
import './todoapp.css';

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (input) => {
    const trimmedValue = input.trim();
    return trimmedValue !== '';
  };

  const addItem = () => {
    if (validateInput(value)) {
      addTask(value);
      setValue('');
      setErrorMessage('');
    } else {

      setErrorMessage('Please enter a valid task.');

      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <>
      <div className='input-container'>
        <input
          type="text"
          className='input'
          placeholder='ADD TASK'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className='add-btn' onClick={addItem}>
        ➕
        </button>
      </div>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default AddTask;




