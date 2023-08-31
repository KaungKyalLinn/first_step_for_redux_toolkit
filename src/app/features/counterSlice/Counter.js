import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increment , decrement, reset, incrementByAmount} from "./CounterSlice";



const Counter = () => {
  const [num, setNum] = useState("");
  const addNum = Number(num) || 0;

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    setNum("");
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
      <button onClick={() => {dispatch(incrementByAmount(addNum))}}>add by increment</button>
      <button onClick={resetAll}>reset</button>
    </section>
  )
}

export default Counter