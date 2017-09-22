import React, { SFC } from 'react';

interface ButtonProps {
  label: string;
}

const Button: SFC<ButtonProps> = ({ label }) => (
  <button className="btn btn-primary btn-lg">{label}</button>
);
export default Button;
