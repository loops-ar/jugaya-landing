import React, { FC } from "react";
import {
  StyledInputContainer,
  StyledTextInput,
  StyledLabel,
} from "./Input.styles";

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}


const Input: FC<InputProps> = ({ name, value, onChange, placeholder, label, disabled}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}
        <StyledTextInput
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </StyledLabel>
    </StyledInputContainer>
  );
};

export default Input;
