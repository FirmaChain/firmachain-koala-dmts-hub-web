import { useContext } from 'react';

import { DropDownContext } from '../context/dropDownProvider';

const useDropDown = () => {
  const context = useContext(DropDownContext);

  if (!context) throw new Error('useDropdown must be used within a DropdownProvider');

  return context;
};

export default useDropDown;
