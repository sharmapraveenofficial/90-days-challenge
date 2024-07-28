import React from 'react';
import { Task } from '../../types/reducer';
import './CheckboxStyles.css';
import { Button } from './AddTask';

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <div style={{
      marginTop: "20px",
      display: "flex",
      gap: "10px",
      flexDirection: "column"
    }}>
      {tasks.map((task) => (
        <div key={task.id} className='checkbox-wrapper-11'>
          <input
            type="checkbox"
            checked={task.done}
            id={`${task.id}`}
            name="r" value="2"
            onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
          />
          <label
            htmlFor={`${task.id}`}
          >{task.text}</label>
          <Button id={`${task.id}`} onClick={() => onDeleteTask(task.id)} style={{marginLeft:"20px"}}>Delete</Button>
        </div>
      ))}
    </div>
  );
}