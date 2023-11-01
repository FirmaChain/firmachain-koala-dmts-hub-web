import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const TopSectionContainer = styled.div`
  width: 100%;
  height: 917px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const TopBackground = styled.div`
  width: 100%;
  height: 480px;
  min-height: 480px;
  max-height: 480px;
  position: absolute;
  top: 252px;
  z-index: 2;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopBg}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopBackgroundInner = styled.div`
  width: 1680px;
  height: 917px;
  position: absolute;
  top: 0;
  z-index: 1;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopBg2}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TopContainer = styled.div`
  width: 100%;
  z-index: 3;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TopLogoContainer = styled.div`
  max-width: 630px;
  height: 190px;
  overflow: hidden;
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const LogoImage = styled(ReactSVG)`
  svg {
    width: 400px;
    height: 166px;
  }
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackgroundLogoImage = styled(ReactSVG)`
  svg {
    width: 280px;
    height: 328px;
  }
  position: absolute;
  top: 60px;
  left: 605px;
  z-index: 0;
`;

export const SubLogoContainer = styled.div`
  width: 210px;
  height: 85px;
  cursor: pointer;

  position: absolute;
  top: 85px;
  right: 0;
`;

export const SubLogoImage1 = styled(ReactSVG)`
  svg {
    width: 210px;
    height: 75px;
  }
  position: absolute;
  top: 9px;
  right: 0;
`;

export const SubLogoImage2 = styled(ReactSVG)`
  svg {
    width: 210px;
    height: 75px;
  }
  position: absolute;
  top: 0px;
  right: 0;
`;

export const FCTLogo = styled(ReactSVG)`
  svg {
    width: 40px;
    height: 60px;
  }
  position: absolute;
  top: 3px;
  left: 16px;
`;

export const PoweredByWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PoweredByTypo = styled.div`
  color: ${({ theme }) => theme.colors.navActive};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const PoweredByValueTypo = styled(ReactSVG)`
  svg {
    width: 120px;
    height: 28px;
  }
`;

export const Character1 = styled.div`
  width: 66px;
  height: 66px;
  position: absolute;
  top: 22px;
  left: 315px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar1}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const Character2 = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  top: 25px;
  right: 100px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar2}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;
export const Character3 = styled.div`
  width: 102px;
  height: 67px;
  position: absolute;
  top: 17px;
  right: 30px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar3}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const MyCharacterContainer = styled.div`
  width: 350px;
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  justify-content: space-between;
  gap: 14px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    display: none;
  }
`;

export const LeftDivider = styled.div`
  width: 9px;
  height: 74px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopDividerLeft}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RightDivider = styled.div`
  width: 9px;
  height: 74px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopDividerRight}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CharacterInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const CharacterInfoTypo = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.font18};
`;

export const CharacterInfoSubTypo = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.sizes.font16};
`;

export const SigninTypo = styled.div`
  white-space: pre;
  color: #242a4b;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  line-height: 1.4;
`;

export const MyCharacter = styled.div`
  position: absolute;
  top: -8px;
  right: 20px;
  width: 79px;
  height: 82px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar4}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const VideoContainer = styled.div`
  margin-top: -58px;
  width: 100%;
  min-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    min-width: 100%;
  }
`;

export const Video = styled.video`
  width: 100%;
  min-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 590px;
  object-fit: cover;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-image: url('/images/img_home_top_video_frame.svg');
  -webkit-mask-image: url('/images/img_home_top_video_frame.svg');
  mask-size: contain;
  -webkit-mask-size: contain;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    width: 100vw;
    min-width: 100vw;
    height: 500px;
    margin-top: 83px;
    object-fit: cover;
    mask-image: none;
    -webkit-mask-image: none;
    border-radius: 15px;
  }
`;

export const GameStartButton = styled.div`
  width: 318px;
  height: 68px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.gameStartButtonBg};
  backdrop-filter: blur(2px);
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    display: none;
  }
`;

export const QuestContainer = styled.div`
  width: 430px;
  height: 80px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  bottom: 50px;
  left: 0;
  z-index: 2;
  border-radius: 0px 10px 10px 0px;
  background-color: ${({ theme }) => theme.colors.questLabelBg};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: auto;
  }
`;

export const QuestCharacter = styled.div`
  width: 63px;
  height: 63px;
  flex-shrink: 0;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar5}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const QuestTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const QuestSubTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
