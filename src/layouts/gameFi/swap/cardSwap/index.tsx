import React from 'react';

import useTheme from '../../../../hooks/useTheme';
import useCustomNavigate from '../../../../hooks/useCustomNavigate';

import {
  SwapCardList,
  SwapCardItem,
  TopWrapper,
  TopLeftWrapper,
  Label,
  BorderLine,
  Description,
  TopRightWrapper,
  BottomWrapper,
  TicketWrapper,
  TicketIcon,
  TicketValueTypo,
  BottomLeftWrapper,
  BottomRightWrapper,
  SwapCardButton,
  CurrencyLeft,
  ChangeArrow,
  CurrencyRight,
  MultiArrowIcon,
  SingleArrowIcon,
  FCTIcon,
  CurrencyTypo,
  KOAIcon,
  TicketIcon2,
} from './styles';

const CardSwap = () => {
  const navigate = useCustomNavigate();
  const { theme } = useTheme();

  const handleSwapMenu = (subType: string) => {
    navigate(`${window.location.pathname}/${subType}`);
  };

  return (
    <SwapCardList>
      <SwapCardItem>
        <TopWrapper>
          <TopLeftWrapper>
            <Label>TOKEN SWAP</Label>
            <BorderLine src={theme.urls.borderLine} $width={'185'} />
            <Description>
              Here's your chance to swap KOA (Koala Of Adventure) tokens for FCT! Only available during the event
              period!
            </Description>
          </TopLeftWrapper>
        </TopWrapper>
        <BottomWrapper>
          <BottomLeftWrapper>
            <CurrencyLeft>
              <FCTIcon />
              <CurrencyTypo>FCT</CurrencyTypo>
            </CurrencyLeft>
            <ChangeArrow>
              <MultiArrowIcon />
            </ChangeArrow>
            <CurrencyRight>
              <KOAIcon />
              <CurrencyTypo>KOA</CurrencyTypo>
            </CurrencyRight>
          </BottomLeftWrapper>
          <BottomRightWrapper>
            <SwapCardButton onClick={() => handleSwapMenu('token')}>SWAP</SwapCardButton>
          </BottomRightWrapper>
        </BottomWrapper>
      </SwapCardItem>

      <SwapCardItem>
        <TopWrapper>
          <TopLeftWrapper>
            <Label>TICKET EXCHANGE</Label>
            <BorderLine src={theme.urls.borderLine} $width={'258'} />
            <Description>
              Exchange the tickets you've earned from the event for KOA (Koala Of Adventure) tokens!
            </Description>
          </TopLeftWrapper>
          <TopRightWrapper>
            <TicketWrapper>
              <TicketIcon />
              <TicketValueTypo>x50</TicketValueTypo>
            </TicketWrapper>
          </TopRightWrapper>
        </TopWrapper>
        <BottomWrapper>
          <BottomLeftWrapper>
            <CurrencyLeft>
              <TicketIcon2 />
            </CurrencyLeft>
            <ChangeArrow>
              <SingleArrowIcon />
            </ChangeArrow>
            <CurrencyRight>
              <KOAIcon />
              <CurrencyTypo>KOA</CurrencyTypo>
            </CurrencyRight>
          </BottomLeftWrapper>
          <BottomRightWrapper>
            <SwapCardButton onClick={() => handleSwapMenu('ticket')}>EXCHANGE</SwapCardButton>
          </BottomRightWrapper>
        </BottomWrapper>
      </SwapCardItem>
    </SwapCardList>
  );
};

export default React.memo(CardSwap);
