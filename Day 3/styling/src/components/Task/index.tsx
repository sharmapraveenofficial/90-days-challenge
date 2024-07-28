import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { Task } from '../../types/reducer';
import { tasksReducer } from '../../reducers/reducer';

let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function WithoutContextComponent() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: 'added',
      id: nextId++,
      text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height:"100vh", background:"silver" }}>
      <h1 style={{ textTransform:"uppercase",paddingTop:"20px" ,color:"#4f29f0"}}>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}