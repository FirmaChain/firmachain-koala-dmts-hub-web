import { combineReducers } from 'redux';
import walletReducer, { IWalletState } from './walletReducer';

export interface rootState {
  wallet: IWalletState;
  balance: string;
  tokenBalance: string;
}

export default combineReducers({
  wallet: walletReducer,
});
