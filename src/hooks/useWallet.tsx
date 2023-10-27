import { useContext } from 'react';
import { WalletContext } from '../context/walletProvider';

const useWallet = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error('useWallet must be used within a WalletContext');
  }

  return {
    isLogin: context.isLogin,
    setUserData: context.setUserData,
    getAccessToken: context.getAccessToken,
    getNftList: context.getNftList,
  };
};

export default useWallet;
