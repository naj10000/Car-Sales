import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
const Total = props => {
  const car = useSelector( state => state.car);
  const price = useSelector( state => state.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
