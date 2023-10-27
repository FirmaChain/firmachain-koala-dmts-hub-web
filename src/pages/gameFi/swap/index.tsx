import React from 'react';

import CardSwap from '../../../layouts/gameFi/swap/cardSwap';
import History from '../../../layouts/gameFi/swap/history';

import { SwapContainer } from '../../../styles/gameFi';

const GameFiSwap = () => {
  return (
    <SwapContainer>
      <CardSwap />
      <History />
    </SwapContainer>
  );
};

export default React.memo(GameFiSwap);
