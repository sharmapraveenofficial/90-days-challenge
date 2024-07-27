import React, { useState, useContext } from 'react';
import { TasksDispatchContext } from '../../contexts/TaskContext';
import { useOnlineStatus } from '../../hooks/useOnline';

const AddTask: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  const isOnline = useOnlineStatus();

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
      <button disabled={!isOnline} onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>{isOnline ? "Add" : "Reconnecting..."}</button>
    </>
  );
};

export default AddTask;
