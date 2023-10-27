import { useContext } from 'react';
import { createPortal } from 'react-dom';

import inventoryItemDetail from '../inventoryItemDetail';
import walletConnect from '../walletConnect';

import { ModalStateContext } from '../../../context/modalProvider';

const MODAL_COMPONENTS = {
  inventoryItemDetail,
  walletConnect,
};

const Portal = () => {
  const { state } = useContext(ModalStateContext);

  if (!state.type) return null;

  const Modal = MODAL_COMPONENTS[state.type];

  return createPortal(<Modal {...state.props} />, document.getElementById('modal') as HTMLElement);
};

export default Portal;
