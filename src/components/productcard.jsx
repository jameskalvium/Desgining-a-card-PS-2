import React from 'react';
import ViewProductButton from './button.jsx'; 

const Productcard = () => {
  const Image =
    'https://m.media-amazon.com/images/I/71oWrfCTiqL._SL1500_.jpg';
  const productName = 'Iphone 16';
  const price = '899';


  const image = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px'
  };


  return (
    <div >
      <img src={Image} alt="Product" style={image} />
      <h2 >{productName}</h2>
      <p style={{color:"white"}}>{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
