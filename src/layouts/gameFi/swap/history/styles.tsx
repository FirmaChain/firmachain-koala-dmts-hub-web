import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

export const LabelIcon = styled(ReactSVG)`
  height: 26px;
  svg {
    width: 14px;
    height: 26px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const TitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 700;
`;

export const HistoryTable = styled.div`
  width: 100%;
  display: table;
  border-collapse: collapse;
`;

export const HistoryTableRow = styled.div`
  display: table-row;

  & > div {
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.hisotryBorder};
  }
`;

export const HistoryTableHeader = styled.div`
  display: table-row;

  border-top: 2px solid ${({ theme }) => theme.colors.hisotryBorder};
  border-bottom: 2px solid ${({ theme }) => theme.colors.hisotryBorder};

  & > div {
    height: 50px;
    color: ${({ theme }) => theme.colors.stakingDesc};
    font-size: ${({ theme }) => theme.sizes.font12};
    font-weight: 500;
  }
`;

export const HistoryTableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0 10px;
`;

export const HistoryType = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HistoryTypeIcon = styled(ReactSVG)`
  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HistoryTypeTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HistoryFromTypo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HistoryToTypo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CurrencyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CurrencyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const HistoryFCTIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HistoryKOAIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyKOA}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HistoryTicketIcon = styled.div`
  width: 34px;
  height: 17px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HistoryCurrencyTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FromToIcon = styled(ReactSVG)`
  min-width: 20px;
  max-width: 20px;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HistoryTimeTypo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TxLinkIcon = styled(ReactSVG)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
