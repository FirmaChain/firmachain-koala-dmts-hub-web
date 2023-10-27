import { ReactSVG } from 'react-svg';
import styled, { keyframes } from 'styled-components';

const moveWave1 = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const moveWave2 = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

export const WorldContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.canvasBg};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    align-items: flex-start;
    padding-top: 100px;
  }
`;

export const WaveBg1 = styled.div`
  width: 100%;
  height: min(10vh, 10vw);
  position: absolute;
  margin-top: 14vh;
  background-image: url('${({ theme }) => theme.urls.worldWaveBg1}');
  background-size: auto 100%;
  background-repeat: repeat-x;
  animation: ${moveWave1} 40s linear infinite;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    margin-top: -150px;
  }
`;

export const WaveBg2 = styled.div`
  width: 100%;
  height: min(10vh, 10vw);
  position: absolute;
  margin-top: 24vh;
  background-image: url('${({ theme }) => theme.urls.worldWaveBg2}');
  background-size: auto 100%;
  background-repeat: repeat-x;
  animation: ${moveWave2} 40s linear infinite;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    margin-top: -120px;
  }
`;

export const BottomBg = styled.div`
  width: 100%;
  height: calc(32vh);
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.canvasBg2};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    height: 60%;
  }
`;

export const WorldLogo = styled(ReactSVG)`
  position: absolute;
  z-index: 3;
  top: 20px;
  right: 30px;
  width: 200px;
  height: 83px;
  svg {
    width: 200px;
    height: 83px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: 100px;
    height: 41px;
    top: 70px;
    svg {
      width: 100px;
      height: 41px;
    }
  }
`;

export const StageList = styled.div<{ $width: number; $height: number }>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  position: absolute;
  background-color: #eeeeee30;
`;

export const StageItem = styled.div`
  position: absolute;
  top: 100px;
  left: 118px;
  display: flex;
  width: 337px;
  height: 122px;
  align-items: flex-start;
  background-color: #eee;
  border-radius: 10px 10px 0px 10px;
`;
