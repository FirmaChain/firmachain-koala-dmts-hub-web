import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import useTheme from '../../../hooks/useTheme';
import useCustomNavigate from '../../../hooks/useCustomNavigate';
import useWallet from '../../../hooks/useWallet';
import useModal from '../../../hooks/useModal';

import { rootState } from '../../../redux/reducers';
import { walletActions } from '../../../redux/action';

import {
  TopSectionContainer,
  TopBackground,
  TopBackgroundInner,
  TopContainer,
  TopLogoContainer,
  LogoImage,
  SubLogoContainer,
  SubLogoImage1,
  SubLogoImage2,
  Character1,
  Character2,
  Character3,
  MyCharacterContainer,
  LeftDivider,
  RightDivider,
  CharacterInfoWrapper,
  CharacterInfoTypo,
  CharacterInfoSubTypo,
  MyCharacter,
  VideoContainer,
  Video,
  GameStartButton,
  QuestContainer,
  QuestCharacter,
  TypoWrapper,
  QuestTypo,
  QuestSubTypo,
  FCTLogo,
  PoweredByWrapper,
  PoweredByTypo,
  PoweredByValueTypo,
  BackgroundLogoImage,
  SigninTypo,
} from './styles';

const SectionTop = () => {
  const { theme } = useTheme();
  const { address } = useSelector((state: rootState) => state.wallet);
  const { isLogin } = useWallet();
  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useCustomNavigate();

  const isDesktop = useMediaQuery({ query: '(min-width: 1600px)' });

  const onClose = (address: string, success: boolean) => {
    walletActions.handleWalletAddress(address);

    if (success) {
      enqueueSnackbar('Successfully connected to wallet.', {
        variant: 'success',
        autoHideDuration: 2000,
      });
    } else {
      enqueueSnackbar('failed connect to wallet.', {
        variant: 'error',
        autoHideDuration: 2000,
      });
    }
  };

  const handleWalletConnectModal = () => {
    openModal({ type: 'walletConnect', props: { onClose } });
  };

  const startGame = () => {
    if (isLogin()) {
      navigate('/world');
    } else {
      handleWalletConnectModal();
    }
  };

  return (
    <TopSectionContainer>
      {isDesktop && <TopBackground />}
      <TopBackgroundInner />
      <TopContainer>
        <TopLogoContainer>
          <LogoImage src={theme.urls.homeSectionTopLogo} />
          <SubLogoContainer>
            <SubLogoImage1 src={theme.urls.homeSectionTopLogoSub1} />
            <SubLogoImage2 src={theme.urls.homeSectionTopLogoSub2} />
            <FCTLogo src={theme.urls.homeSectionTopLogoFCT} />
            <PoweredByWrapper>
              <PoweredByTypo>Powered by</PoweredByTypo>
              <PoweredByValueTypo src={theme.urls.homeSectionTopLogoFirma} />
            </PoweredByWrapper>
          </SubLogoContainer>
          <Character1 />
          <Character2 />
          <Character3 />
        </TopLogoContainer>
        <BackgroundLogoImage src={theme.urls.homeSectionTopLogoFCT2} />

        <MyCharacterContainer>
          <LeftDivider />
          <CharacterInfoWrapper>
            {address ? (
              <>
                <CharacterInfoTypo>Lv 1. KoalaKnight</CharacterInfoTypo>
                <CharacterInfoSubTypo>POINT : 0</CharacterInfoSubTypo>
              </>
            ) : (
              <SigninTypo>{'Sign in and\ncreate a character.'}</SigninTypo>
            )}
            <MyCharacter />
          </CharacterInfoWrapper>
          <RightDivider />
        </MyCharacterContainer>

        <VideoContainer>
          <GameStartButton onClick={() => startGame()}>GAME START</GameStartButton>
          <Video src={theme.urls.homeSectionTopVideo} muted autoPlay loop />
          <QuestContainer>
            <QuestCharacter />
            <TypoWrapper>
              <QuestTypo>HUB QUEST</QuestTypo>
              <QuestSubTypo>I will help you!</QuestSubTypo>
            </TypoWrapper>
          </QuestContainer>
        </VideoContainer>
      </TopContainer>
    </TopSectionContainer>
  );
};

export default React.memo(SectionTop);
