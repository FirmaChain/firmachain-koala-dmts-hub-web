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

  const dummyList = [{ name: 'KOA Staking' }, { name: 'Weapon Staking' }, { name: 'Zem Staking' }];

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
                      <PoolInfoValue>88.88%</PoolInfoValue>
                    </PoolInfo>

                    <PoolInfo>
                      <PoolInfoLabel>Total staked</PoolInfoLabel>
                      <PoolInfoValue>888,888,888</PoolInfoValue>
                    </PoolInfo>
                  </PoolInfoList>
                  <StakingButtonWrapper>
                    <StakingButton onClick={() => navigate(`/koala-fi/staking/${v}`)}>STAKING</StakingButton>
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
