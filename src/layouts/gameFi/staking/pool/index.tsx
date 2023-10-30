import React from 'react';

import useTheme from '../../../../hooks/useTheme';
import useCustomNavigate from '../../../../hooks/useCustomNavigate';

import {
  BottomWrapper,
  TitleWrapper,
  LabelIcon,
  TitleTypo,
  PoolContainer,
  PoolList,
  PoolItem,
  PoolTopWrapper,
  PoolImage,
  PoolBottomWrapper,
  PoolTitle,
  PoolTitleTypo,
  PoolInfoList,
  PoolInfo,
  PoolInfoLabel,
  PoolInfoValue,
  StakingButton,
  StakingButtonWrapper,
} from './styles';

const StakingPool = () => {
  const navigate = useCustomNavigate();
  const { theme } = useTheme();

  const dummyList = [
    { name: 'KOA Staking', apr: '72.18%', value: '154,582,110' },
    { name: 'Weapon Staking', apr: '85.52%', value: '421,112' },
    { name: 'Zem Staking', apr: '86.12%', value: '7,332,120' },
  ];

  return (
    <BottomWrapper>
      <TitleWrapper>
        <LabelIcon src={theme.urls.labelIcon} />
        <TitleTypo>POOL</TitleTypo>
      </TitleWrapper>
      <PoolContainer>
        <PoolList>
          {dummyList.map((v, index) => {
            return (
              <PoolItem key={index}>
                <PoolTopWrapper>
                  <PoolImage $src={theme.urls[`dummyStakingPool${index + 1}`]} />
                </PoolTopWrapper>
                <PoolBottomWrapper>
                  <PoolTitle>
                    <PoolTitleTypo>{v.name}</PoolTitleTypo>
                  </PoolTitle>
                  <PoolInfoList>
                    <PoolInfo>
                      <PoolInfoLabel>APR</PoolInfoLabel>
                      <PoolInfoValue>{v.apr}</PoolInfoValue>
                    </PoolInfo>

                    <PoolInfo>
                      <PoolInfoLabel>Total staked</PoolInfoLabel>
                      <PoolInfoValue>{v.value}</PoolInfoValue>
                    </PoolInfo>
                  </PoolInfoList>
                  <StakingButtonWrapper>
                    <StakingButton onClick={() => navigate(`/koala-fi/staking/0`)}>STAKING</StakingButton>
                  </StakingButtonWrapper>
                </PoolBottomWrapper>
              </PoolItem>
            );
          })}
        </PoolList>
      </PoolContainer>
    </BottomWrapper>
  );
};

export default React.memo(StakingPool);
