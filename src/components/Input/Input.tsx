import React, { FC } from "react";
import {
  StyledInputContainer,
  StyledTextInput,
  StyledLabel,
} from "./Input.styles";

interface InputProps {
  name: string;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  max?: string | number;
  min?: string | number;
  type?: string;
}

const Input: FC<InputProps> = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  label,
  disabled,
  max,
  min,
  type,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>
        {label}
        <StyledTextInput
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          max={max}
          min={min}
          type={type}
        />
      </StyledLabel>
    </StyledInputContainer>
  );
};

export default Input;
