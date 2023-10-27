import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const ContentContainer = styled.div`
  width: 100%;
  padding: 0 20px 20px 20px;
  display: flex;
  position: relative;
`;

export const FilterContainer = styled.div<{ $expended: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 134px;
  z-index: 2;

  ${({ $expended, theme }) =>
    $expended
      ? `
          width: 300px;
          min-width: 300px;
        `
      : `
          width: 50px;
          min-width: 50px;
          & > div:nth-child(1) > div > div:nth-child(2) { display:none; }
          & > div:nth-child(1) > div > div:nth-child(1) > div > svg { fill: ${theme.colors.submenuDefault};}
          & > div:nth-child(2) { padding:0; }
          & > div:nth-child(2) > div { display:none }
        `}
`;

export const FilterTitleWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const FilterTitle = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.accountDivider2};
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.accountBg1};
  gap: 5px;
`;

export const FilterCollapsedIcon = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    margin-top: 3px;
    width: 100%;
    height: 100%;
  }
`;

export const FilterTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.submenuDefault};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const FilterListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 240px);
  padding: 30px 26px;
  border-radius: 0 0 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.accountDivider2};
  border-top: 0;
  background: ${({ theme }) => theme.colors.accountBg1};
`;

export const NftContainer = styled.div`
  width: 100%;
  padding: 0 20px 0 40px;
  display: flex;
  flex-direction: column;
`;

export const NftTitleContainer = styled.div`
  width: 100%;
  height: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 134px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.background};

  @media only screen and (max-width: 1360px) {
    height: calc(80px + 60px);
    & > div {
      height: calc(60px + 60px);
      flex-direction: column;
      gap: 10px;
    }
    & > div > div {
      width: 100%;
    }
  }
`;

export const NftTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

export const SearchInputWrapper = styled.div`
  width: 500px;
  min-width: 500px;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accountDivider2};
  background: ${({ theme }) => theme.colors.white};
`;

export const SearchIcon = styled(ReactSVG)`
  width: 30px;
  min-width: 30px;
  height: 30px;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 30px;
    height: 30px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
`;

export const ResultTypo = styled.div`
  height: 50px;
  color: ${({ theme }) => theme.colors.accountText1};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const SortWrapper = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SortSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 20px;
`;

export const SortOption = styled.option``;

export const ActivityListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StatusWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StatusTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 600;
`;

export const StatusList = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accountDivider2};
  background: ${({ theme }) => theme.colors.white};
  gap: 15px;
`;

export const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
`;

export const StatusCount = styled.div`
  color: ${({ theme }) => theme.colors.accountText1};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const FilterItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.accountDivider2};
`;

export const FilterTypo = styled.div`
  color: ${({ theme }) => theme.colors.accountText1};
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FilterArrow = styled(ReactSVG)`
  width: 30px;
  heigth: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-bottom: 2px;
    width: 10px;
    heigth: 5px;
  }
`;

export const ActivityTable = styled.div`
  width: 100%;
  display: table;
  border-collapse: collapse;

  & > div > div:nth-child(1) {
    width: 14%;
  }
  & > div > div:nth-child(2) {
    width: 28%;
  }
  & > div > div:nth-child(3) {
    width: 15%;
  }
  & > div > div:nth-child(4) {
    width: 12%;
  }
  & > div > div:nth-child(5) {
    width: 12%;
  }
  & > div > div:nth-child(6) {
    width: 13%;
  }
  & > div > div:nth-child(7) {
    width: 5%;
  }
`;

export const ActivityTableRow = styled.div`
  display: table-row;

  & > div {
    height: 90px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.hisotryBorder};
  }
`;

export const ActivityTableHeader = styled.div`
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

export const ActivityTableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0 10px;
`;

export const ActivityType = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ActivityTypeIcon = styled(ReactSVG)`
  svg {
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const ActivityTypeTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ActivityFromTypo = styled.div`
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

export const ActivityToTypo = styled.div`
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

export const ActivityFCTIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ActivityTicketIcon = styled.div`
  width: 34px;
  height: 17px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ActivityCurrencyTypo = styled.div`
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

export const ActivityTimeTypo = styled.div`
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ItemImageWrapper = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #b4b4b4;
  background: #d9d9d9;
`;

export const ItemImage = styled.div`
  width: 46px;
  height: 46px;
  background-image: url('${({ theme }) => theme.urls.dummyNft}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ItemInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ItemNameTypo = styled.div`
  color: #000;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const ItemIdTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;
