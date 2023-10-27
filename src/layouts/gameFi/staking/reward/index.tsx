import React from 'react';
import { useSelector } from 'react-redux';

import useTheme from '../../../../hooks/useTheme';
import { rootState } from '../../../../redux/reducers';

import {
  TopWrapper,
  LeftWrapper,
  StakingTitleTypo,
  StakingDescription,
  RightWrapper,
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
  BalanceWrapper,
  Balance,
  BalanceLabel,
  BalanceValueList,
  BalanceValueItem,
  BalanceValueIcon,
  BalanceValueTypo,
} from './styles';

const StakingReward = () => {
  const { theme } = useTheme();
  const { balance, tokenBalance } = useSelector((state: rootState) => state.wallet);

  return (
    <TopWrapper>
      <LeftWrapper>
        <StakingTitleTypo>STAKING</StakingTitleTypo>
        <BorderLine src={theme.urls.borderLine} />
        <StakingDescription>
          Stake your KOA tokens and NFTs, and earn rewards based on the staking duration. Seize this opportunity to
          maximize your benefits!
        </StakingDescription>
      </LeftWrapper>
      <RightWrapper>
        <BalanceWrapper>
          <Balance>
            <BalanceLabel>Staked</BalanceLabel>
            <BalanceValueList>
              <BalanceValueItem>
                <BalanceValueIcon $src={theme.urls.stakingFCT} />
                <BalanceValueTypo>8000</BalanceValueTypo>
              </BalanceValueItem>
              <BalanceValueItem>
                <BalanceValueIcon $src={theme.urls.stakingKOA} />
                <BalanceValueTypo>15000</BalanceValueTypo>
              </BalanceValueItem>
            </BalanceValueList>
          </Balance>
          <Balance>
            <BalanceLabel>My wallet</BalanceLabel>
            <BalanceValueList>
              <BalanceValueItem>
                <BalanceValueIcon $src={theme.urls.stakingFCT} />
                <BalanceValueTypo>{balance}</BalanceValueTypo>
              </BalanceValueItem>
              <BalanceValueItem>
                <BalanceValueIcon $src={theme.urls.stakingKOA} />
                <BalanceValueTypo>{tokenBalance}</BalanceValueTypo>
              </BalanceValueItem>
            </BalanceValueList>
          </Balance>
        </BalanceWrapper>
        <RewardWrapper>
          <Reward>
            <RewardLabel>REWARD</RewardLabel>
            <RewardValueList>
              <RewardValueItem>
                <ValueIcon $src={theme.urls.stakingFCT} />
                <ValueTypo>10.621</ValueTypo>
                <ValueCurrency>FCT</ValueCurrency>
              </RewardValueItem>
              <RewardValueItem>
                <ValueIcon $src={theme.urls.stakingKOA} />
                <ValueTypo>50</ValueTypo>
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

export default React.memo(StakingReward);
