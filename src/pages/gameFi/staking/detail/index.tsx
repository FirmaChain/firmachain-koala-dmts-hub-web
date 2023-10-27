import React from 'react';
import { useParams } from 'react-router-dom';

import StakingPool from '../../../../layouts/gameFi/staking/detail/pool';
import StakingDelegation from '../../../../layouts/gameFi/staking/detail/delegation';
import StakingReward from '../../../../layouts/gameFi/staking/detail/reward';

import { StakingDetailBottomCardWrapper, StakingDetailContainer } from '../../../../styles/gameFi';

const GameFiStakingDetail = () => {
  const { subType } = useParams();

  return (
    <StakingDetailContainer>
      <StakingPool subType={subType} />
      <StakingDetailBottomCardWrapper>
        <StakingDelegation subType={subType} />
        <StakingReward subType={subType} />
      </StakingDetailBottomCardWrapper>
    </StakingDetailContainer>
  );
};

export default React.memo(GameFiStakingDetail);
