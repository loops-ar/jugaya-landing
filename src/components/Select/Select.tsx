import React, { FC } from "react";
import {
  StyledSelectContainer,
  StyledTextSelect,
  StyledLabel,
} from "./Select.styles";

interface SelectProps {
  name: string;
  label?: string;
  options?: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
  name,
  label,
  options,
  onChange,
}) => {
  return (
    <StyledSelectContainer>
      <StyledLabel>
        {label}
        <StyledTextSelect
          name={name}
          onChange={onChange}
        >
          {options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </StyledTextSelect>
      </StyledLabel>
    </StyledSelectContainer>
  );
};

export default Select;
