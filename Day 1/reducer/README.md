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

## Day 2: React Performance Optimization

### Overview
27-07-2024's focus was on optimizing React applications for better performance. We explored techniques to improve load times, reduce unnecessary re-renders, and efficiently manage resources.

### Topics Covered
1. **Lazy Loading**
   - Understanding the concept and benefits of lazy loading
   - Implementing lazy loading using `React.lazy` and `Suspense`

2. **Memoization**
   - Grasping the concept of memoization for performance optimization
   - Using `React.memo` for functional components and `useMemo` for values

3. **Code Splitting**
   - Understanding code splitting to improve load times
   - Implementing code splitting with dynamic `import()` statements and tools like Webpack

### Summary
- Lazy Loading: Defer loading of non-essential resources at initial load time
- Memoization: Optimize performance by caching results of expensive calculations
- Code Splitting: Split the application into smaller bundles for improved load times and overall performance

These techniques enhance React application efficiency, leading to faster and more responsive user experiences.