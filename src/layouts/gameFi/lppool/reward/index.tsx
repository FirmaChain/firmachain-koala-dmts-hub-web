import React from 'react';

import useTheme from '../../../../hooks/useTheme';

import {
  TopWrapper,
  LeftWrapper,
  StakingTitleTypo,
  StakingDescription,
  RightWrapper,
  BalanceWrapper,
  TokenBalance,
  Amount,
  AmountLabel,
  AmountValue,
  NftBalance,
  RewardWrapper,
  Reward,
  RewardLabel,
  RewardValueList,
  RewardValueItem,
  ValueIcon,
  ValueTypo,
  ValueCurrency,
  ButtonWrapper,
  RecieveButton,
  BorderLine,
  BalanceDivider,
  LiquidityButton,
  LeftTopWrapper,
} from './styles';

const LppoolReward = () => {
  const { theme } = useTheme();

  return (
    <TopWrapper>
      <LeftWrapper>
        <LeftTopWrapper>
          <StakingTitleTypo>LP-POOL</StakingTitleTypo>
          <BorderLine src={theme.urls.borderLine} />
          <StakingDescription>
            Add liquidity to the Koala Knights pool using your FCT and KOA (Koala Of Adventure) tokens. By doing so, you
            can continuously earn rewards based on the duration of your contribution.
          </StakingDescription>
        </LeftTopWrapper>

        <LiquidityButton>+ Add Liquidity</LiquidityButton>
      </LeftWrapper>
      <RightWrapper>
        <BalanceWrapper>
          <TokenBalance>
            <Amount>
              <AmountLabel>NFT Owned</AmountLabel>
              <AmountValue>32</AmountValue>
            </Amount>
            <Amount>
              <AmountLabel>NFT Staked</AmountLabel>
              <AmountValue>5</AmountValue>
            </Amount>
          </TokenBalance>
          <BalanceDivider />
          <NftBalance>
            <Amount>
              <AmountLabel>Token Available</AmountLabel>
              <AmountValue>11123456.123</AmountValue>
            </Amount>
            <Amount>
              <AmountLabel>Token Delegated</AmountLabel>
              <AmountValue>123456.888</AmountValue>
            </Amount>
          </NftBalance>
        </BalanceWrapper>
        <RewardWrapper>
          <Reward>
            <RewardLabel>REWARD</RewardLabel>
            <RewardValueList>
              <RewardValueItem>
                <ValueIcon $src={theme.urls.stakingFCT} />
                <ValueTypo>8888888.888</ValueTypo>
                <ValueCurrency>FCT</ValueCurrency>
              </RewardValueItem>
              <RewardValueItem>
                <ValueIcon $src={theme.urls.stakingKOA} />
                <ValueTypo>123</ValueTypo>
                <ValueCurrency>KOA</ValueCurrency>
              </RewardValueItem>
            </RewardValueList>
          </Reward>
          <ButtonWrapper>
            <RecieveButton>RECIEVE</RecieveButton>
          </ButtonWrapper>
        </RewardWrapper>
      </RightWrapper>
    </TopWrapper>
  );
};

export default React.memo(LppoolReward);
