import React from 'react';

import Reward from '../../../layouts/gameFi/staking/reward';
import Pool from '../../../layouts/gameFi/staking/pool';

import { StakingContainer } from '../../../styles/gameFi';

const GameFiStaking = () => {
  return (
    <StakingContainer>
      <Reward />
      <Pool />
    </StakingContainer>
  );
};

export default React.memo(GameFiStaking);
