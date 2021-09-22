import React from 'react';

import './styles.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="" {...otherProps}>
      {children}
      <h2>h2</h2>
    </button>
  );
};

export default Button;
