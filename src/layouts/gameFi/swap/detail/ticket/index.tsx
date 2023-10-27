import React from 'react';

import {
  SwapTokenContainer,
  TitleWrapper,
  TitleIcon,
  TitleTypo,
  SwapCardWrapper,
  SwapCard,
  SwapAmountWrapper,
  AmountTopWrapper,
  AmountTargetLabel,
  AmountBalance,
  BalanceLabelTypo,
  BalanceValueTypo,
  AmountBottomWrapper,
  AmountCurrencyWrapper,
  AmountValueWrapper,
  AmountValueInput,
  AmountDivider,
  ArrowDownIcon,
  RateCard,
  RateLabelTypo,
  RateWrapper,
  RateItem,
  RateCurrencyIconTicket,
  RateTypo,
  SwapButton,
  AmountTicketIcon,
  AmountTypo,
  AmountKOAIcon,
} from './styles';

const SwapTicket = () => {
  return (
    <SwapTokenContainer>
      <TitleWrapper>
        <TitleIcon />
        <TitleTypo>TICKET EXCHANGE</TitleTypo>
      </TitleWrapper>
      <SwapCardWrapper>
        <SwapCard>
          <SwapAmountWrapper>
            <AmountTopWrapper>
              <AmountTargetLabel>FROM</AmountTargetLabel>
              <AmountBalance>
                <BalanceLabelTypo>Balance</BalanceLabelTypo>
                <BalanceValueTypo>5</BalanceValueTypo>
              </AmountBalance>
            </AmountTopWrapper>
            <AmountBottomWrapper $active={true}>
              <AmountCurrencyWrapper>
                <AmountTicketIcon />
                <AmountTypo>TICKET</AmountTypo>
              </AmountCurrencyWrapper>
              <AmountDivider />
              <AmountValueWrapper>
                <AmountValueInput placeholder='0' type='number' />
              </AmountValueWrapper>
            </AmountBottomWrapper>
          </SwapAmountWrapper>

          <ArrowDownIcon />

          <SwapAmountWrapper>
            <AmountTopWrapper>
              <AmountTargetLabel>TO</AmountTargetLabel>
              <AmountBalance></AmountBalance>
            </AmountTopWrapper>
            <AmountBottomWrapper $active={false}>
              <AmountCurrencyWrapper>
                <AmountKOAIcon />
                <AmountTypo>KOA</AmountTypo>
              </AmountCurrencyWrapper>
              <AmountDivider />
              <AmountValueWrapper>
                <AmountValueInput placeholder='0' type='number' readOnly />
              </AmountValueWrapper>
            </AmountBottomWrapper>
          </SwapAmountWrapper>
          <RateCard>
            <RateLabelTypo>RATE</RateLabelTypo>
            <RateWrapper>
              <RateItem>
                <RateCurrencyIconTicket />
                <RateTypo>1 = 1.123123 KOA</RateTypo>
              </RateItem>
            </RateWrapper>
          </RateCard>

          <SwapButton>EXCHANGE</SwapButton>
        </SwapCard>
      </SwapCardWrapper>
    </SwapTokenContainer>
  );
};

export default React.memo(SwapTicket);
