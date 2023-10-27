import React, { useState } from 'react';

export const DropDownContext = React.createContext<[boolean, (isOpen: boolean) => void] | undefined>(undefined);

const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <DropDownContext.Provider value={[isOpen, setIsOpen]}> {children}</DropDownContext.Provider>;
};

export default DropdownProvider;
