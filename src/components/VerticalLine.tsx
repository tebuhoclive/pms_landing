import React from 'react';

const VerticalLine = () => {
  const lineStyle = {
    width: '2px',
    height: '900px', // Extend the line from top to bottom
    backgroundColor: 'red',
    marginRight: '10px', // Add right margin to move the line to the right
   marginTop:'0px'
  };

  return (
    <div style={lineStyle}></div>
  );
};

export default VerticalLine;

