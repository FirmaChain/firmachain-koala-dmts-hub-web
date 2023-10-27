import React from 'react';

import useTheme from '../../../../../hooks/useTheme';

import {
  TitleTypo,
  TopCard,
  TopLeftWrapper,
  PoolImage,
  TopRightWrapper,
  DescriptionWrapper,
  PoolTitle,
  PoolDescription,
  Available,
  AvailableTypo,
  AvailableList,
  AvailableItem,
  AvailableNft,
  NftImage,
  StakingInfoWrapper,
  InfoWrapper,
  InfoTitleTypo,
  InfoValueTypo,
  InfoDivider,
  AvailableIcon,
  AvailableCurrecyTypo,
} from './styles';

interface IProps {
  subType: string;
}

const StakingDetailPool = ({ subType }: IProps) => {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      <TitleTypo>POOL Detail</TitleTypo>
      <TopCard>
        <TopLeftWrapper>
          <PoolImage />
        </TopLeftWrapper>
        <TopRightWrapper>
          <DescriptionWrapper>
            <PoolTitle>Treasure Cup x AI Arena</PoolTitle>
            <PoolDescription>
              Get ready to experience the ultimate McDonald’s® Hong Kong Chicken McNuggets adventure in McNuggets ng
              Chicken McNuggets adventure in McNuggets
            </PoolDescription>
            <Available>
              <AvailableTypo>STAKING ABLE</AvailableTypo>
              <AvailableList>
                {subType === '1' ? (
                  <>
                    <AvailableItem>
                      <AvailableNft>
                        <NftImage $src={theme.urls.dummyNft1} />
                      </AvailableNft>
                    </AvailableItem>
                    <AvailableItem>
                      <AvailableNft>
                        <NftImage $src={theme.urls.dummyNft2} />
                      </AvailableNft>
                    </AvailableItem>
                    <AvailableItem>
                      <AvailableNft>
                        <NftImage $src={theme.urls.dummyNft3} />
                      </AvailableNft>
                    </AvailableItem>
                  </>
                ) : (
                  <>
                    <AvailableItem>
                      <AvailableIcon $src={theme.urls.currencyFCT} />
                      <AvailableCurrecyTypo>FCT</AvailableCurrecyTypo>
                    </AvailableItem>
                    <AvailableItem>
                      <AvailableIcon $src={theme.urls.currencyKOA} />
                      <AvailableCurrecyTypo>KOA</AvailableCurrecyTypo>
                    </AvailableItem>
                  </>
                )}
              </AvailableList>
            </Available>
          </DescriptionWrapper>
          <StakingInfoWrapper>
            <InfoWrapper $emphasis={false}>
              <InfoTitleTypo>Total staked</InfoTitleTypo>
              <InfoValueTypo>122234.123123</InfoValueTypo>
            </InfoWrapper>
            <InfoDivider />
            <InfoWrapper $emphasis={true}>
              <InfoTitleTypo>APR</InfoTitleTypo>
              <InfoValueTypo>80.98%</InfoValueTypo>
            </InfoWrapper>
          </StakingInfoWrapper>
        </TopRightWrapper>
      </TopCard>
    </React.Fragment>
  );
};

export default React.memo(StakingDetailPool);
