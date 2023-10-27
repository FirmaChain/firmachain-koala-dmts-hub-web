import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div:nth-child(1) {
    margin-left: -26vw;
    margin-top: -11vw;
  }

  & > div:nth-child(2) {
    margin-left: -18vw;
    margin-top: 8vw;
  }

  & > div:nth-child(3) {
    margin-left: 10vw;
    margin-top: 10vw;
  }

  & > div:nth-child(4) {
    margin-left: 22vw;
    margin-top: -14vw;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    align-items: flex-start;
    padding-top: 100px;
  }
`;

export const StageCard = styled.div<{ $active: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  display: flex;
  width: 330px;
  height: 120px;
  justify-content: center;
  align-items: center;
  ${({ $active }) =>
    $active === false &&
    `
      & > div:nth-child(2) {
        background-color: #cacaca;
      }
    `}
`;

export const StageInfo = styled.div`
  width: calc(100% - 10px);
  height: calc(100% - 5px);
  margin-left: -4px;
  margin-top: -3px;
  padding: 26px;
  display: flex;
  z-index: 3;
  border-radius: 10px;
`;

export const StageIconWrapper = styled.div`
  flex: 0 0 80px;
  display: flex;
`;

export const StageIcon = styled.div<{ $src: string }>`
  width: 50px;
  height: 50px;
  image-rendering: pixelated;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StageInfoWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ $active }) =>
    $active === false &&
    `
      & > div { color:#34569A; }
      & > div > div { color:#34569A; }
    `}
`;

export const StageTitleTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 3px;
`;

export const StageSubTitleTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  margin-bottom: 2px;
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const ProgressLabel = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 1.4;
`;

export const ProgressValue = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  line-height: 1.4;
`;

export const BorderLine = styled(ReactSVG)<{ $active: boolean }>`
  width: 185px;
  min-height: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  & > div {
    width: 374px;
    height: 3px;
    display: flex;
  }
  svg {
    rect {
      fill: ${({ theme, $active }) => ($active ? theme.colors.textPrimary : '#34569A')};
    }
    width: 374px;
    height: 3px;
  }
`;
