import React, { useState } from 'react';

const CounterExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
      <h4>Interactive Example: Counter</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
};

export default CounterExample;
