import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const EventSectionContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};

  background-color: ${({ theme }) => theme.colors.cardEventBg};
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 14px 14px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid #f1f1f1;
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
  font-size: ${({ theme }) => theme.sizes.font30};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ExternalLinkIcon = styled(ReactSVG)`
  svg {
    width: 32px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.eventSub};
  }
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const TrendingContainer = styled.div`
  width: 100%;
  padding: 30px 36px 40px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const TrendingWrapper = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NftList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const NftItem = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #d3d3d3;
`;

export const NftIndexTypo = styled.div`
  flex: 1 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font17};
  font-weight: 600;
`;

export const NftImageWrapper = styled.div`
  margin: 10px 0;
  height: 80px;
  flex: 1 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #d9d9d9;
`;

export const NftImage = styled.div<{ $src: string }>`
  width: 70px;
  height: 70px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const NftInfoWrapper = styled.div`
  padding: 0 14px;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NftNameTypo = styled.div`
  overflow: hidden;
  color: #363c60;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const NftIdTypo = styled.div`
  overflow: hidden;
  color: #7c7c7c;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font13};
  font-weight: 500;
`;

export const FCTIcon = styled.div`
  flex: 0 0 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FCTPriceTypo = styled.div`
  flex: 1 1 50%;
  padding: 0 16px;
  text-align: right;
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;
