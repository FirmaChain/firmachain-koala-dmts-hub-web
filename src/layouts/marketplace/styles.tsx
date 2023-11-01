import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const MarketplaceContainer = styled.div`
  width: 100%;
  margin-top: -66px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerLineWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarketplaceWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopBannerList = styled.div`
  position: relative;
  width: 100%;
  height: 424px;
  display: flex;
  overflow: hidden;
`;

export const TopBannerWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const TopBannerImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 424px;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerInfoContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 424px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const BannerInfoWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -20px;
  width: 500px;
  height: 290px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #363c60;
  background: #fff;
`;

export const BannerLineContainer = styled.div`
  width: 100%;
  height: 84px;
  background-color: #6092f1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const BannerInfoTitleWrapper = styled.div`
  width: 100%;
  height: 46px;
  min-height: 46px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 0px 0px;
  background: #0b7dff;
`;

export const BannerInfoTitleTypo = styled.div`
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 700;
`;

export const BannerInfoTitleChar = styled.div`
  width: 150px;
  height: 120px;
  position: absolute;
  right: 5px;
  top: -35px;
  image-rendering: pixelated;
  background-image: url('${({ theme }) => theme.urls.marketplaceBannerChar1}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerInfoDescriptionWrapper = styled.div`
  width: 100%;
  padding: 0 34px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const BannerInfoDescriptionTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BannerInfoDescriptionBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BannerInfoLabel = styled.div`
  color: #0b7dff;
  font-size: ${({ theme }) => theme.sizes.font60};
  font-weight: 700;
`;

export const BannerInfoDescription = styled.div`
  max-width: 310px;
  color: #0b7dff;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 1.5;
`;

export const ViewButton = styled.div`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
  border-radius: 50px;
  background: #0b7dff;
`;

export const TypeLabelList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TypeLabelItem = styled.div`
  display: flex;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
  border-radius: 50px;
  border: 2px solid #fff;
`;

export const TotalList = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border-left: 2px solid #ffffff80;
`;

export const TotalListLabel = styled.div`
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const TotalListValue = styled.div`
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const SliderControl = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LeftIcon = styled(ReactSVG)`
  width: 14px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2px;
  margin-right: 8px;
  svg {
    width: 14px;
    height: 16px;
    & > path {
      stroke: #fff !important;
    }
  }
`;

export const RightIcon = styled(ReactSVG)`
  width: 14px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 8px;
  transform: scaleX(-1);
  svg {
    width: 14px;
    height: 16px;
    & > path {
      stroke: #fff !important;
    }
  }
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 0 3px;
  ${({ $active }) =>
    $active
      ? `
            background-color:#fff;
        `
      : `
        border:1px solid #ccc;
      `}
`;
