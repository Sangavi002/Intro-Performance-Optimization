import React, { useState, useCallback, useMemo } from 'react';
import { Timer } from './Timer';
import { Counter } from './Counter';
import { useEffect } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  const startTimer = useCallback(() => {
    setTimerRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setTimerRunning(false);
    setTime(0); 
  }, []);

  const pauseTimer = useCallback(() => {
    setTimerRunning(prevTimerRunning => !prevTimerRunning);
  }, []);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1); 
      }, 1000);
    } else {
      clearInterval(intervalId); 
    }

    return () => clearInterval(intervalId); 
  }, [timerRunning]);


  const timerComponent = useMemo(() => <Timer time={time} />, [time]);

  return (
    <div className='container'>
      <h3><Counter count={count} increment={increment} decrement={decrement} /></h3>
      <br />
      <h3>{timerComponent}</h3>
      <br />
      <div>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={pauseTimer}>
          {timerRunning ? 'Pause Timer' : 'Resume Timer'}
        </button>
      </div>
    </div>
  );
}

export default App
