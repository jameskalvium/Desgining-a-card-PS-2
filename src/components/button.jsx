// write button card here

import React from 'react';

const ViewProduct = () => {
  const buttonText = 'View Product';

  const button = {
    padding: '8px 16px',
    backgroundColor: 'blue',
    border: 'none',
    color: 'white',
    borderRadius: '10px'
    
  };

  return <button style={button}>{buttonText}</button>;
};

export default ViewProduct;
