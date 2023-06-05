import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    amountAdded: (state, actions: PayloadAction<number>) => {
      state.value += actions.payload;
    },
  },
});

export const { amountAdded, increment } = counterSlice.actions;

export default counterSlice.reducer;
