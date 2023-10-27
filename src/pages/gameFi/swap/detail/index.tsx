import React from 'react';
import { useParams } from 'react-router-dom';

import SwapDetail from '../../../../layouts/gameFi/swap/detail';

import { SwapContainer } from '../../../../styles/gameFi';

const GameFiSwapDetail = () => {
  const { subType } = useParams();

  return (
    <SwapContainer>
      <SwapDetail subType={subType} />
    </SwapContainer>
  );
};

export default React.memo(GameFiSwapDetail);
