import { ReactSVG } from 'react-svg';
import styled, { css, keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const CloseButton = styled(ReactSVG)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 20px;
    height: 20px;
  }
`;

export const RightContainer = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  transform: translateX(100%);
  border-left: 1px solid #363c60;
  ${({ $active }) =>
    $active &&
    css`
      animation: ${slideInFromRight} 0.3s ease-out forwards 0s;
    `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex: 0 0 65px;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid #d3d3d3;
`;

export const PlayButton = styled.div`
  width: 200px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid #983906;
  background: #f2702a;
`;

export const BodyWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TitleLogo = styled.div`
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  background-image: url('${({ theme }) => theme.urls.worldEventLogo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TitleNameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
`;

export const TitleSubTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  min-height: 2px;
  margin: 20px 0;
  background-color: #363c60;
`;

export const Description = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 30px;
`;

export const StageCardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const StageCardItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #f2702a;
  background: #fff;
  overflow: hidden;
`;

export const StageCardBg = styled.div`
  width: 100%;
  height: 126px;
  background-image: url('${({ theme }) => theme.urls.worldEventStageBg}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StageInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StageTitleWrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const StageTag = styled.div`
  display: flex;
  padding: 5px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
  border-radius: 4px;
  background: #323859;
`;

export const StageNameTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
`;

export const StageDescription = styled.div`
  margin: 0 30px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font13};
  font-weight: 500;
  line-height: 1.7;
  border-top: 2px solid #afafaf;
`;

export const StageButtonWrapper = styled.div`
  width: 100%;
  padding: 0 30px 20px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StagePlayButton = styled.div`
  width: 160px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 700;
  letter-spacing: -0.24px;
  border-radius: 10px;
  border: 2px solid #363c60;
  background: #363c60;
`;
