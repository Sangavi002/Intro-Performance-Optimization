import React from 'react';

export const Counter = React.memo(({ count, increment, decrement }) => {
    console.log('Counter rendered');
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  });