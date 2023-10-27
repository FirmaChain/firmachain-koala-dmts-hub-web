import { useContext } from 'react';
import { ModalStateContext } from '../context/modalProvider';

const useModal = () => {
  const modalContext = useContext(ModalStateContext);

  const openModal = ({ type, props = null }) => {
    modalContext.setState({ type, props });
  };

  const closeModal = () => {
    modalContext.setState({ type: null, props: null });
  };

  const props = modalContext.state.props;

  return { openModal, closeModal, props };
};

export default useModal;
