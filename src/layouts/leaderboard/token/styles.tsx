import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 120px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background: #f7f7f7;
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 16px 14px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.eventBorder};
`;

export const CardLabel = styled.div`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.eventIcon};
`;

export const EventIcon = styled(ReactSVG)`
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HeaderTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 280px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ExternalLinkIcon = styled(ReactSVG)`
  svg {
    width: 32px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.eventSub};
  }
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableWrapper = styled.div`
  width: 100%;
  padding: 20px 36px 40px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RankTable = styled.div`
  width: 100%;
  display: table;
  border-collapse: collapse;
`;

export const RankTableRow = styled.div`
  display: table-row;

  & > div {
    height: 90px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.hisotryBorder};
  }
`;

export const RankTableHeader = styled.div`
  display: table-row;

  border-bottom: 2px solid ${({ theme }) => theme.colors.hisotryBorder};

  & > div {
    height: 50px;
    color: ${({ theme }) => theme.colors.stakingDesc};
    font-size: ${({ theme }) => theme.sizes.font12};
    font-weight: 500;
  }
`;

export const RankTableCell = styled.div<{ $align?: string }>`
  display: table-cell;
  vertical-align: middle;
  padding: 0 10px;

  ${({ $align }) => ($align === 'center' ? 'text-align:center;' : $align === 'right' ? 'text-align:right;' : '')};
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

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProfileIcon = styled.div<{ $src: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: gray;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProfileInfo = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  ${({ $active }) =>
    $active &&
    `
    & > div {
      color:#F2702A;
    }
  `}
`;

export const NickNameTypo = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #363c60;
  leading-trim: both;
  text-edge: cap;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const AddressTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const PoolNameTypo = styled.div`
  color: #7c7c7c;
  text-edge: cap;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const FCTIcon = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FCTValue = styled.div`
  color: #363c60;
  leading-trim: both;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const MyRankInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const RankTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const MyRankLabel = styled.div`
  color: #f2702a;
  text-align: center;
  text-edge: cap;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
`;

export const MyRankTypo = styled.div`
  width: auto;
  color: #fff;
  padding: 5px 8px;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  border-radius: 7px;
  background: #f2702a;
`;
