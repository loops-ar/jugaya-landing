import React, { FC } from "react";
import {
  StyledSelectContainer,
  StyledTextSelect,
  StyledLabel,
} from "./Select.styles";

interface SelectOptions {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label?: string;
  options?: SelectOptions[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
}

const Select: FC<SelectProps> = ({ name, label, options, onChange, value }) => {
  return (
    <StyledSelectContainer>
      <StyledLabel>
        {label}
        <StyledTextSelect name={name} onChange={onChange} value={value}>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </StyledTextSelect>
      </StyledLabel>
    </StyledSelectContainer>
  );
};

export default Select;
