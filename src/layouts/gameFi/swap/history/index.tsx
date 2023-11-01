import React from 'react';

import useTheme from '../../../../hooks/useTheme';

import Pagination from '../../../../components/pagination';

import {
  TitleWrapper,
  LabelIcon,
  TitleTypo,
  HistoryTable,
  HistoryTableHeader,
  HistoryTableCell,
  HistoryTableRow,
  HistoryWrapper,
  HistoryType,
  HistoryTypeIcon,
  HistoryTypeTypo,
  HistoryFromTypo,
  HistoryToTypo,
  CurrencyContainer,
  HistoryFCTIcon,
  HistoryCurrencyTypo,
  FromToIcon,
  HistoryKOAIcon,
  CurrencyWrapper,
  HistoryTimeTypo,
  TxLinkIcon,
  HistoryTicketIcon,
  PaginationWrapper,
} from './styles';

const SwapHistory = () => {
  const { theme } = useTheme();

  return (
    <HistoryWrapper>
      <TitleWrapper>
        <LabelIcon src={theme.urls.labelIcon} />
        <TitleTypo>HISTORY</TitleTypo>
      </TitleWrapper>
      <HistoryTable>
        <HistoryTableHeader>
          <HistoryTableCell>Type</HistoryTableCell>
          <HistoryTableCell>From</HistoryTableCell>
          <HistoryTableCell>To</HistoryTableCell>
          <HistoryTableCell>Swap Amount</HistoryTableCell>
          <HistoryTableCell>Time</HistoryTableCell>
          <HistoryTableCell></HistoryTableCell>
        </HistoryTableHeader>
        <HistoryTableRow>
          <HistoryTableCell>
            <HistoryType>
              <HistoryTypeIcon src={theme.urls.swapHistoryIcon1} />
              <HistoryTypeTypo>Token swap</HistoryTypeTypo>
            </HistoryType>
          </HistoryTableCell>
          <HistoryTableCell>
            <HistoryFromTypo>firmaEbf...7f0d</HistoryFromTypo>
          </HistoryTableCell>
          <HistoryTableCell>
            <HistoryToTypo>firmaEbf...7f0d</HistoryToTypo>
          </HistoryTableCell>
          <HistoryTableCell>
            <CurrencyContainer>
              <CurrencyWrapper>
                <HistoryFCTIcon />
                <HistoryCurrencyTypo>12.50281</HistoryCurrencyTypo>
              </CurrencyWrapper>
              <FromToIcon src={theme.urls.swapHistoryArrow} />
              <CurrencyWrapper>
                <HistoryKOAIcon />
                <HistoryCurrencyTypo>110.12</HistoryCurrencyTypo>
              </CurrencyWrapper>
            </CurrencyContainer>
          </HistoryTableCell>
          <HistoryTableCell>
            <HistoryTimeTypo>42 minutes ago</HistoryTimeTypo>
          </HistoryTableCell>
          <HistoryTableCell>
            <TxLinkIcon src={theme.urls.externalLinkArrow2} />
          </HistoryTableCell>
        </HistoryTableRow>
        <HistoryTableRow>
          <HistoryTableCell>
            <HistoryType>
              <HistoryTypeIcon src={theme.urls.swapHistoryIcon2} />
              <HistoryTypeTypo>Ticket Exchange</HistoryTypeTypo>
            </HistoryType>
          </HistoryTableCell>
          <HistoryTableCell>
            <HistoryFromTypo>firmaEbf...7f0d</HistoryFromTypo>
          </HistoryTableCell>
          <HistoryTableCell>
            <HistoryToTypo>firmaEbf...7f0d</HistoryToTypo>
          </HistoryTableCell>
          <HistoryTableCell>
            <CurrencyContainer>
              <CurrencyWrapper>
                <HistoryTicketIcon />
                <HistoryCurrencyTypo>50</HistoryCurrencyTypo>
              </CurrencyWrapper>
              <FromToIcon src={theme.urls.swapHistoryArrow} />
              <CurrencyWrapper>
                <HistoryKOAIcon />
                <HistoryCurrencyTypo>1252.456</HistoryCurrencyTypo>
              </CurrencyWrapper>
            </CurrencyContainer>
          </HistoryTableCell>
          <HistoryTableCell>
            <HistoryTimeTypo>42 minutes ago</HistoryTimeTypo>
          </HistoryTableCell>
          <HistoryTableCell>
            <TxLinkIcon src={theme.urls.externalLinkArrow2} />
          </HistoryTableCell>
        </HistoryTableRow>

        {[0, 1, 2, 3, 4, 5, 6, 7].map((v) => {
          return (
            <HistoryTableRow key={v}>
              <HistoryTableCell>
                <HistoryType>
                  <HistoryTypeIcon src={theme.urls.swapHistoryIcon1} />
                  <HistoryTypeTypo>Token swap</HistoryTypeTypo>
                </HistoryType>
              </HistoryTableCell>
              <HistoryTableCell>
                <HistoryFromTypo>firmaEbf...7f0d</HistoryFromTypo>
              </HistoryTableCell>
              <HistoryTableCell>
                <HistoryToTypo>firmaEbf...7f0d</HistoryToTypo>
              </HistoryTableCell>
              <HistoryTableCell>
                <CurrencyContainer>
                  <CurrencyWrapper>
                    <HistoryFCTIcon />
                    <HistoryCurrencyTypo>1251.10211</HistoryCurrencyTypo>
                  </CurrencyWrapper>
                  <FromToIcon src={theme.urls.swapHistoryArrow} />
                  <CurrencyWrapper>
                    <HistoryKOAIcon />
                    <HistoryCurrencyTypo>20120.102456</HistoryCurrencyTypo>
                  </CurrencyWrapper>
                </CurrencyContainer>
              </HistoryTableCell>
              <HistoryTableCell>
                <HistoryTimeTypo>42 minutes ago</HistoryTimeTypo>
              </HistoryTableCell>
              <HistoryTableCell>
                <TxLinkIcon src={theme.urls.externalLinkArrow2} />
              </HistoryTableCell>
            </HistoryTableRow>
          );
        })}
      </HistoryTable>
      <PaginationWrapper>
        <Pagination itemsPerPage={10} totalItems={100} currentPage={1} onPageChange={() => {}} />
      </PaginationWrapper>
    </HistoryWrapper>
  );
};

export default React.memo(SwapHistory);
