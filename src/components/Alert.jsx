import React from 'react';

const Alert = ({ mensaje, color }) => {
  if (!mensaje) {
    return null; 
  }

  return (
    <div className={`alert alert-${color}`}>
      {mensaje}
    </div>
  );
};

export default Alert;
