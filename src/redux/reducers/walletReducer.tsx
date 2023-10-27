import { createAction, createReducer } from '@reduxjs/toolkit';
import { HANDLE_WALLET_ADDRESS, HANDLE_WALLET_BALANCE, HANDLE_WALLET_TOKEN_BALANCE } from '../types';

export interface IWalletState {
  address: string;
  balance: string;
  tokenBalance: string;
}

const initialState = {
  address: '',
  balance: '0',
  tokenBalance: '0',
};

const handleWalletAddress = createAction<string>(HANDLE_WALLET_ADDRESS);
const handleWalletBalance = createAction<string>(HANDLE_WALLET_BALANCE);
const handleWalletTokenBalance = createAction<string>(HANDLE_WALLET_TOKEN_BALANCE);

export default createReducer(initialState, (builder) => {
  builder
    .addCase(handleWalletAddress, (state, action) => {
      state.address = action.payload;
    })
    .addCase(handleWalletBalance, (state, action) => {
      state.balance = action.payload;
    })
    .addCase(handleWalletTokenBalance, (state, action) => {
      state.tokenBalance = action.payload;
    });
});
