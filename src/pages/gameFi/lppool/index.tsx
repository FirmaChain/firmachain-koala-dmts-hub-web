import React from 'react';

import Reward from '../../../layouts/gameFi/lppool/reward';
import Chart from '../../../layouts/gameFi/lppool/chart';

import { LppoolContainer } from '../../../styles/gameFi';

const GameFiLppool = () => {
  return (
    <LppoolContainer>
      <Reward />
      <Chart />
    </LppoolContainer>
  );
};

export default React.memo(GameFiLppool);
