import React from 'react';
 
 export const Timer = React.memo(({ time }) => {
    console.log('Timer rendered');
    return <div>Time: {time}</div>;
  });