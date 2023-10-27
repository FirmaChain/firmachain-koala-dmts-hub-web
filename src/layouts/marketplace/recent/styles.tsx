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
    padding: 0 120px;
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

export const NftList = styled.div`
  width: 100%;
  padding: 30px 36px 40px 36px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NftItem = styled.div`
  display: flex;
  height: 380px;
  padding: 10px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background: #fff;
`;

export const NftItemImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #d9d9d9;
`;

export const NftItemImage = styled.div<{ $src: string }>`
  width: 190px;
  height: 190px;
  image-rendering: pixelated;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NftItemInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 22px 16px 10px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NftNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NftNameTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const NftIdTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const NftPriceWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  border-top: 2px solid #d3d3d3;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FCTIcon = styled.div`
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FCTPriceTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  margin-top: 1px;
`;
