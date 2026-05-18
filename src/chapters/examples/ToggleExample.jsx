import React, { useState } from 'react';

const ToggleExample = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
      <h4>Interactive Example: Toggle Switch</h4>
      <div 
        onClick={() => setIsOn(!isOn)}
        style={{
          width: '50px',
          height: '25px',
          background: isOn ? '#4caf50' : '#ccc',
          borderRadius: '15px',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.3s'
        }}
      >
        <div style={{
          width: '21px',
          height: '21px',
          background: 'white',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: isOn ? '27px' : '2px',
          transition: 'left 0.3s'
        }} />
      </div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ToggleExample;
