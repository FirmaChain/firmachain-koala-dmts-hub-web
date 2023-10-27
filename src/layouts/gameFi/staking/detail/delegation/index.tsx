import React from 'react';

import useTheme from '../../../../../hooks/useTheme';

import {
  CardLabel,
  DelegationValueList,
  DelegationValueItem,
  ButtonWrapper,
  DelegationValueIcon,
  DelegationValueTypo,
  DelegationValueCurrency,
  DelegateButton,
  UNDelegateButton,
  MyDelegationCard,
  MyDelegationTopWrapper,
  DelegationValueItemMini,
  DelegateNftList,
  DelegationNftItem,
  NftImage,
  NftName,
  NftImageWrapper,
} from './styles';

interface IProps {
  subType: string;
}

const StakingDetail = ({ subType }: IProps) => {
  const { theme } = useTheme();

  return subType === '1' ? (
    <MyDelegationCard>
      <MyDelegationTopWrapper>
        <CardLabel>My delegation</CardLabel>
        <DelegationValueItemMini>
          <DelegationValueIcon $src={theme.urls.stakingFCT} />
          <DelegationValueTypo>8888888.888</DelegationValueTypo>
          <DelegationValueCurrency>FCT</DelegationValueCurrency>
        </DelegationValueItemMini>
      </MyDelegationTopWrapper>

      <DelegateNftList>
        <DelegationNftItem>
          <NftImageWrapper>
            <NftImage $src={theme.urls.dummyNft1} />
          </NftImageWrapper>
          <NftName>#126589</NftName>
        </DelegationNftItem>
        <DelegationNftItem>
          <NftImageWrapper>
            <NftImage $src={theme.urls.dummyNft2} />
          </NftImageWrapper>
          <NftName>#126589</NftName>
        </DelegationNftItem>
        <DelegationNftItem>
          <NftImageWrapper>
            <NftImage $src={theme.urls.dummyNft3} />
          </NftImageWrapper>
          <NftName>#126589</NftName>
        </DelegationNftItem>
        <DelegationNftItem>
          <NftImageWrapper>
            <NftImage $src={theme.urls.dummyNft3} />
          </NftImageWrapper>
          <NftName>#126589</NftName>
        </DelegationNftItem>
        <DelegationNftItem>
          <NftImageWrapper>
            <NftImage $src={theme.urls.dummyNft3} />
          </NftImageWrapper>
          <NftName>#126589</NftName>
        </DelegationNftItem>
      </DelegateNftList>

      <ButtonWrapper>
        <DelegateButton>DELEGATE</DelegateButton>
        <UNDelegateButton>UNDELEGATE</UNDelegateButton>
      </ButtonWrapper>
    </MyDelegationCard>
  ) : (
    <MyDelegationCard>
      <MyDelegationTopWrapper>
        <CardLabel>My delegation</CardLabel>
      </MyDelegationTopWrapper>
      <DelegationValueList>
        <DelegationValueItem>
          <DelegationValueIcon $src={theme.urls.stakingFCT} />
          <DelegationValueTypo>8888888.888</DelegationValueTypo>
          <DelegationValueCurrency>FCT</DelegationValueCurrency>
        </DelegationValueItem>
        <DelegationValueItem>
          <DelegationValueIcon $src={theme.urls.stakingKOA} />
          <DelegationValueTypo>8888888.888</DelegationValueTypo>
          <DelegationValueCurrency>KOA</DelegationValueCurrency>
        </DelegationValueItem>
      </DelegationValueList>
      <ButtonWrapper>
        <DelegateButton>DELEGATE</DelegateButton>
        <UNDelegateButton>UNDELEGATE</UNDelegateButton>
      </ButtonWrapper>
    </MyDelegationCard>
  );
};

export default React.memo(StakingDetail);
