import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const NftDetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NftDetailWrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.sizes.maxWidth};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 50px 120px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 50px 40px;
  }
`;

export const NftImageWrapper = styled.div`
  width: 370px;
  min-width: 370px;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: calc(66px + 50px);
  position: sticky;
  z-index: 2;
  border-radius: 20px;
  border: 1px solid #b4b4b4;
  background: #d9d9d9;
`;

export const NftImage = styled.div<{ $src: string }>`
  width: 250px;
  height: 250px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const NftInfoContainer = styled.div`
  width: 100%;
  padding: 0 20px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NftTopCard = styled.div`
  position: relative;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid #d3d3d3;
  background: #fff;
`;

export const NftInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #d3d3d3;
  background: #fff;
`;

export const NftHistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #d3d3d3;
  background: #fff;
`;

export const NftIdLabel = styled.div`
  margin-bottom: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid #000;
`;

export const NftNameTypo = styled.div`
  margin-bottom: 10px;
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 600;
`;

export const NftOwnerTypo = styled.div`
  margin-bottom: 50px;
  color: #000;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const NftPriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const FCTIcon = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin-bottom: 2px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FCTPriceTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font32};
  font-weight: 600;
  letter-spacing: -0.68px;
`;

export const USDPriceTypo = styled.div`
  margin-bottom: 2px;
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
  letter-spacing: -0.24px;
`;

export const EndDateTypo = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  gap: 10px;
`;

export const ViewCountWrapper = styled.div`
  position: absolute;
  top: 36px;
  right: 36px;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewCountIcon = styled.div`
  width: 20px;
  height: 12px;
  opacity: 0.7;
  background-image: url('${({ theme }) => theme.urls.view}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ViewCountTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
  letter-spacing: -0.24px;
`;

export const ActionButton = styled.div<{ $type: number }>`
  flex: 1 0 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $type }) => ($type === 0 ? '#fff' : '#363C60')};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid ${({ $type }) => ($type === 0 ? '#983906' : '#363C60')};
  background: ${({ $type }) => ($type === 0 ? '#f2702a' : '#fff')};
`;

export const NftInfoTitle = styled.div`
  width: 100%;
  padding: 26px 36px;
  position: relative;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
`;

export const NftInfoTitleTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const NftInfoDivider = styled.div`
  position: absolute;
  bottom: 0;
  width: 14px;
  height: 3px;
  background: #d3d3d3;
`;

export const NftPropertyList = styled.div`
  display: flex;
  padding: 34px 36px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

export const NftPropertyItem = styled.div`
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background: #f7f7f7;
`;

export const PropertyNameTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const PropertyValueTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const PropertyDescription = styled.div`
  margin-top: 8px;
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const NftDescription = styled.div`
  padding: 34px 36px 40px 36px;

  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 1.45;
`;

export const NftHistoryTabList = styled.div`
  width: 100%;
  padding: 0 36px;
  position: relative;
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #f1f1f1;
`;

export const HistoryTabItem = styled.div<{ $active: boolean }>`
  height: 56px;
  padding: 0 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) => ($active ? '#F2702A' : '#7c7c7c')};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 500;

  cursor: pointer;
  & > div {
    background-color: ${({ $active }) => ($active ? '#F2702A' : '#fff')};
  }
`;

export const TabDivider = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
`;

export const NftHistoryInfo = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LatestDateTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterButton = styled.div`
  display: flex;
  width: 130px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: #f2702a;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  border-radius: 10px;
  border: 2px solid #f2702a;
`;

export const NftHistoryTabContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 36px 36px 36px;
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

export const HistoryTicketIcon = styled.div`
  width: 34px;
  height: 17px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const FCTIconMini = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  margin-top: -1px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
