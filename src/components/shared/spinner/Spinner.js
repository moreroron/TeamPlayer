import React from 'react';
import './style.css';

const Spinner = () => {
  return (
    <div className="container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
