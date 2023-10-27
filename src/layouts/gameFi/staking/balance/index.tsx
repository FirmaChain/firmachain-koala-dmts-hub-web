import React from 'react';

import { BalanceWrapper, Amount, AmountLabel, AmountValue, AmountWrapper } from './styles';

const StakingBalance = () => {
  return (
    <BalanceWrapper>
      <AmountWrapper>
        <Amount>
          <AmountLabel>NFT Owned</AmountLabel>
          <AmountValue>32</AmountValue>
        </Amount>
        <Amount>
          <AmountLabel>Token Available</AmountLabel>
          <AmountValue>11123456.123</AmountValue>
        </Amount>
        <Amount>
          <AmountLabel>NFT Staked</AmountLabel>
          <AmountValue>5</AmountValue>
        </Amount>
        <Amount>
          <AmountLabel>Token Delegated</AmountLabel>
          <AmountValue>123456.888</AmountValue>
        </Amount>
      </AmountWrapper>
    </BalanceWrapper>
  );
};

export default React.memo(StakingBalance);
