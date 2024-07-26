import React, { useState, useContext } from 'react';
import { Task, Action } from '../../types/reducer';
import { TasksContext, TasksDispatchContext } from '../../contexts/TaskContext';

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
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
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
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
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
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
  );
};

export default TaskList;
