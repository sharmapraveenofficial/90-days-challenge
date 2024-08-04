import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      if (state.count > 0) state.count -= 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
