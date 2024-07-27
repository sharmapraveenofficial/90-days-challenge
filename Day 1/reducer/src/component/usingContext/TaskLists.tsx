import React, { useState, useContext } from 'react';
import { Task, Action } from '../../types/reducer';
import { TasksContext, TasksDispatchContext } from '../../contexts/TaskContext';
import { useOnlineStatus } from '../../hooks/useOnline';

const TaskList: React.FC = () => {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  if (!tasks || !dispatch) {
    throw new Error('TaskList must be used within a TasksContext.Provider and TasksDispatchContext.Provider');
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskItem task={task} dispatch={dispatch} />
        </li>
      ))}
    </ul>
  );
};

interface TaskItemProps {
  task: Task;
  dispatch: React.Dispatch<Action>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const isOnline = useOnlineStatus();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          disabled={!isOnline}
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button disabled={!isOnline} onClick={() => setIsEditing(false)}>
        {isOnline ? "Save" : "Reconnecting..."}
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button disabled={!isOnline} onClick={() => setIsEditing(true)}>
        {isOnline ? "Edit" : "Reconnecting..."}
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        disabled={!isOnline}
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button
       disabled={!isOnline}
       onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        {isOnline ? "Delete" : "Reconnecting..."}
      </button>
    </label>
  );
};

export default TaskList;
