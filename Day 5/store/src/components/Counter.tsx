import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../slices/counterSlice';
import { RootState } from '../store/store';

const Counter: React.FC = () => {

  // Subscribing to the store
  const count = useSelector((state: RootState) => state.counter.count);

  // Dispatcher funciton to dispatch an action
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button disabled={count<=0}onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
};

export default Counter;
