import React, { useReducer } from 'react';
import { TasksContext, TasksDispatchContext } from '../../contexts/TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskLists';
import { Task } from '../../types/reducer';
import { tasksReducer } from '../../reducers/reducer';


const initialTasks: Task[] = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

const UsingContextTask: React.FC = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default UsingContextTask;
