import React, { useState } from 'react';

import CustomSelect from '../../../../../components/customSelect';

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
  FCTIcon,
  KOAIcon,
  AmountDivider,
  ArrowDownIcon,
  RateCard,
  RateLabelTypo,
  RateWrapper,
  RateItem,
  RateCurrencyIconFCT,
  RateCurrencyIconKOA,
  RateTypo,
  SwapButton,
} from './styles';

const SwapToken = () => {
  const [fromCurrency, setFromCurrency] = useState('KOA');
  const [toCurrency, setToCurrency] = useState('FCT');

  const handleCurrency = (type: string, value: string) => {
    if (type === 'from') {
      setFromCurrency(value);
      setToCurrency(value === 'FCT' ? 'KOA' : 'FCT');
    } else if (type === 'to') {
      setToCurrency(value);
      setFromCurrency(value === 'FCT' ? 'KOA' : 'FCT');
    }
  };

  const options = [
    { value: 'FCT', label: 'FCT', icon: <FCTIcon /> },
    { value: 'KOA', label: 'KOA', icon: <KOAIcon /> },
  ];

  return (
    <SwapTokenContainer>
      <TitleWrapper>
        <TitleIcon />
        <TitleTypo>SWAP TOKEN</TitleTypo>
      </TitleWrapper>
      <SwapCardWrapper>
        <SwapCard>
          <SwapAmountWrapper>
            <AmountTopWrapper>
              <AmountTargetLabel>FROM</AmountTargetLabel>
              <AmountBalance>
                <BalanceLabelTypo>Balance</BalanceLabelTypo>
                <BalanceValueTypo>5.154165</BalanceValueTypo>
              </AmountBalance>
            </AmountTopWrapper>
            <AmountBottomWrapper>
              <AmountCurrencyWrapper>
                <CustomSelect type='from' options={options} value={fromCurrency} onChange={handleCurrency} />
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
            <AmountBottomWrapper>
              <AmountCurrencyWrapper>
                <CustomSelect type='to' options={options} value={toCurrency} onChange={handleCurrency} />
              </AmountCurrencyWrapper>
              <AmountDivider />
              <AmountValueWrapper>
                <AmountValueInput placeholder='0' type='number' />
              </AmountValueWrapper>
            </AmountBottomWrapper>
          </SwapAmountWrapper>
          <RateCard>
            <RateLabelTypo>RATE</RateLabelTypo>
            <RateWrapper>
              <RateItem>
                <RateCurrencyIconFCT />
                <RateTypo>1 FCT = 12.123123 KOA</RateTypo>
              </RateItem>
              <RateItem>
                <RateCurrencyIconKOA />
                <RateTypo>1 KOA = 0.123123 KOA</RateTypo>
              </RateItem>
            </RateWrapper>
          </RateCard>

          <SwapButton>SWAP</SwapButton>
        </SwapCard>
      </SwapCardWrapper>
    </SwapTokenContainer>
  );
};

export default React.memo(SwapToken);
