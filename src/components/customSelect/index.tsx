import React, { useState } from 'react';

import { SelectContainer, SelectedOption, OptionValueWrapper, OptionsContainer, Option, DropDown } from './styles';

interface ICustomSelect {
  type: string;
  options: { value: string; label: string; icon: React.ReactNode }[];
  value: string;
  onChange: (type: string, value: string) => void;
}

const CustomSelect = ({ type, options, value, onChange }: ICustomSelect) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <SelectContainer onClick={() => setIsOpen(!isOpen)}>
      <SelectedOption>
        <OptionValueWrapper>
          {selectedOption?.icon}
          {selectedOption?.label}
        </OptionValueWrapper>
        <DropDown />
      </SelectedOption>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => {
                onChange(type, option.value);
                setIsOpen(false);
              }}
            >
              {option.icon}
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

export default CustomSelect;
