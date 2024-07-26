import React, { useState, useContext } from 'react';
import { TasksDispatchContext } from '../../contexts/TaskContext';

const AddTask: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  let nextId = 3;

  if (!dispatch) {
    throw new Error('AddTask must be used within a TasksDispatchContext.Provider');
  }

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</button>
    </>
  );
};

export default AddTask;
