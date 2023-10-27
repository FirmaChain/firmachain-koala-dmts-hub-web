import React from 'react';

import { Label, CheckboxInput, CheckboxTypo } from './styles';

interface ICheckbox {
  children: React.ReactNode;
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ children, checked, onChange }: ICheckbox) => {
  const onChangeInput = ({ target: { checked } }) => onChange(checked);

  return (
    <Label>
      <CheckboxInput type='checkbox' checked={checked} onChange={onChangeInput} />
      <CheckboxTypo>{children}</CheckboxTypo>
    </Label>
  );
};

export default React.memo(Checkbox);
