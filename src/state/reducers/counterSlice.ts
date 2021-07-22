import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementAsync: state => state,
    decrementAsync: state => state,
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementAsync, decrementAsync} =
  counterSlice.actions;

export default counterSlice.reducer;
