import React from 'react';

/* eslint-disable */
const Button = ({ onClick, text, buttonClass }) => {
  return <button className={buttonClass} type="button" onClick={onClick}>{text}</button>;
};

export default Button;
