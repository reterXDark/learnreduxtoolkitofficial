import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { increment, amountAdded } from "./feature/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <br />
      <button onClick={() => dispatch(amountAdded(5))}>Add Amount</button>
    </div>
  );
}

export default App;
