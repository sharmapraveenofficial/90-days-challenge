import React from 'react';
import { Task } from '../../types/reducer';

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
         <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
          />
          <input
            type="text"
            value={task.text}
            onChange={(e) =>
              onChangeTask({ ...task, text: e.target.value })
            }
          />
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
