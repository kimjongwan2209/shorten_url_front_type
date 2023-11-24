import React from 'react';
import { InputBox as StyledInputBox } from '../../styles/main'

type InputBoxProps = {
  type: "text" | "password"
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputBoxProps> = ({ type, value, onChange }) => {
  return (
    <StyledInputBox
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

