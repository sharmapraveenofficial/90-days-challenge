# Day 1: Advanced React - React Reducer

## Overview
26-07-2024's learning focused on understanding and implementing the `useReducer` hook in React. This hook is useful for managing complex state logic in functional components. Additionally, we explored integrating `useReducer` with context for scalable state management across the component tree.

## Topics Covered

### 1. Introduction to useReducer
- **Purpose**: An alternative to `useState` for managing complex state logic.
- **Benefits**: Simplifies state transitions and enhances maintainability for complex state structures.

### 2. Defining a Reducer Function
- **Structure**: A reducer function takes the current state and an action as arguments and returns a new state.
- **Action Types**: Defined types of actions that dictate how the state should change (e.g., 'added', 'changed', 'deleted').

### 3. Using useReducer in Components
- **Implementation**: How to integrate `useReducer` within a functional component.
- **Dispatching Actions**: The mechanism to trigger state changes using the `dispatch` function.

### 4. Combining useReducer with Context
- **Context Creation**: Setting up context to provide state and dispatch functions.
- **Context Consumption**: Accessing the provided context in child components to manage state efficiently.

## Conclusion
By the end of Day 1, I have a solid understanding of:
- The `useReducer` hook and when to use it.
- How to define and use a reducer function.
- Integrating `useReducer` with context to manage state across a component tree.

### References
- [React Documentation on `useReducer`](https://react.dev/learn/extracting-state-logic-into-a-reducer)
