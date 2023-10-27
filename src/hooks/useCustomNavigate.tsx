import { useNavigate } from 'react-router-dom';
import useDropDown from './useDropdown';

const useCustomNavigate = () => {
  const navigate = useNavigate();
  const [, setIsOpen] = useDropDown();

  const customNavigate = (to: any, ...args: any[]) => {
    setIsOpen(false);
    navigate(to, ...args);
  };

  return customNavigate;
};

export default useCustomNavigate;
