import { createContext, Dispatch } from 'react';
import { Task, Action } from '../types/reducer';

export const TasksContext = createContext<Task[] | undefined>(undefined);
export const TasksDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);
