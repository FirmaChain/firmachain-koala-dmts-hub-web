import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FirmaSDK } from '@firmachain/firma-js';
import axios from 'axios';

import { rootState } from '../redux/reducers';

import { NftData } from '../interface/nft';
import { CHAIN_CONFIG } from '../config';
import { walletActions } from '../redux/action';
import { convertToFctString } from '../utils/common';

interface IWalletContext {
  isLogin: () => boolean;
  setUserData: () => Promise<void>;
  getAccessToken: () => Promise<string>;
  getNftList: () => Promise<NftData[]>;
}

export const WalletContext = React.createContext<IWalletContext | null>(null);

const WalletProvider = ({ children }) => {
  const firmaSDK = new FirmaSDK(CHAIN_CONFIG.FIRMACHAIN_CONFIG);
  const { address } = useSelector((state: rootState) => state.wallet);

  useEffect(() => {
    address && setUserData();
  }, [address]); // eslint-disable-line react-hooks/exhaustive-deps

  const isLogin = () => {
    return address !== '';
  };

  const getAddress = (): string => {
    if (address === '' || address === null || address === undefined) throw new Error('INVALID WALLET');
    return address;
  };

  const getAccessToken = async () => {
    try {
      const { data } = await axios.post(`${CHAIN_CONFIG.API_HOST}/game/accessToken`, { address });
      if (data.code !== 0) return '';

      return data.result.token;
    } catch (e) {
      console.log(e);
      return '';
    }
  };

  const getNftList = async () => {
    try {
      const userAddress = getAddress();

      let nftList = [];
      let totalNftList = [];
      let result: any;

      do {
        if (result && result.pagination) {
          result = await firmaSDK.Nft.getNftIdListOfOwner(userAddress, result.pagination.next_key);
        } else {
          result = await firmaSDK.Nft.getNftIdListOfOwner(userAddress);
        }
        totalNftList = totalNftList.concat(result.nftIdList);
      } while (result.pagination.next_key != null);

      for (let nft of totalNftList) {
        if (Number(nft) < 320) continue;

        const nftData = await firmaSDK.Nft.getNftItem(nft);
        const { data } = await axios.get(nftData.tokenURI);
        const meta = await axios.get(data.metaURI);
        const attributes = meta.data.attributes;
        const identity = data.identity;

        if (CHAIN_CONFIG.DAPP_ID === identity) {
          nftList.push({ ...data, attributes, nftId: nft });
        }
      }

      return nftList;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const setUserData = async () => {
    try {
      const userAddress = getAddress();
      const balance = await firmaSDK.Bank.getBalance(userAddress);

      walletActions.handleWalletBalance(convertToFctString(balance));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isLogin,
        setUserData,
        getAccessToken,
        getNftList,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
