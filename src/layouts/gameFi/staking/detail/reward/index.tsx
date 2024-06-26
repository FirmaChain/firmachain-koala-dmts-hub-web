import React from 'react';

import useTheme from '../../../../../hooks/useTheme';

import {
  RewardValueList,
  RewardValueItem,
  ValueIcon,
  ValueTypo,
  ValueCurrency,
  CardLabel,
  RewardCard,
  RewardWrapper,
  RecieveButton,
} from './styles';

interface IProps {
  subType: string;
}

const StakingDetail = ({ subType }: IProps) => {
  const { theme } = useTheme();

  return (
    <RewardCard>
      <CardLabel>Reward</CardLabel>
      <RewardWrapper>
        <RewardValueList>
          <RewardValueItem>
            <ValueIcon $src={theme.urls.stakingFCT} />
            <ValueTypo>142.154</ValueTypo>
            <ValueCurrency>FCT</ValueCurrency>
          </RewardValueItem>
          <RewardValueItem>
            <ValueIcon $src={theme.urls.stakingKOA} />
            <ValueTypo>4230.110</ValueTypo>
            <ValueCurrency>KOA</ValueCurrency>
          </RewardValueItem>
        </RewardValueList>
      </RewardWrapper>
      <RecieveButton>RECIEVE</RecieveButton>
    </RewardCard>
  );
};

export default React.memo(StakingDetail);
