import React from 'react';
import { useSnackbar } from 'notistack';

import useWallet from '../../../hooks/useWallet';
import useTheme from '../../../hooks/useTheme';

import {
  BodyWrapper,
  CloseButton,
  Description,
  Divider,
  HeaderWrapper,
  PlayButton,
  RightContainer,
  StageButtonWrapper,
  StageCardBg,
  StageCardItem,
  StageCardList,
  StageDescription,
  StageInfoWrapper,
  StageNameTypo,
  StagePlayButton,
  StageTag,
  StageTitleWrapper,
  TitleLogo,
  TitleNameWrapper,
  TitleSubTypo,
  TitleTypo,
  TitleWrapper,
} from './styles';

const RightStage = ({
  activeRight,
  setActiveRight,
}: {
  activeRight: boolean;
  setActiveRight: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { theme } = useTheme();
  const { getAccessToken } = useWallet();
  const { enqueueSnackbar } = useSnackbar();

  const startGame = async () => {
    const accessToken = await getAccessToken();

    if (accessToken === '') {
      enqueueSnackbar(`You've already joined the event.`, {
        variant: 'error',
        autoHideDuration: 2000,
      });
    } else {
      setActiveRight(false);
      window.location.href = `koalaknights://${accessToken}`;

      // const childWindow = window.open(CHAIN_CONFIG.GAME, 'childWindow');

      // window.addEventListener(
      //   'message',
      //   (event) => {
      //     if (event.origin !== CHAIN_CONFIG.GAME) return;

      //     console.log('READY FOR PARENTS');

      //     if (event.data === 'ready') childWindow.postMessage(accessToken, CHAIN_CONFIG.GAME);
      //   },
      //   false
      // );
    }
  };

  return (
    <RightContainer $active={activeRight}>
      <HeaderWrapper>
        <CloseButton src={theme.urls.close} onClick={() => setActiveRight(false)} />
        <PlayButton onClick={() => startGame()}>PLAY GAME</PlayButton>
      </HeaderWrapper>
      <BodyWrapper>
        <TitleWrapper>
          <TitleLogo />
          <TitleNameWrapper>
            <TitleTypo>EVENT</TitleTypo>
            <TitleSubTypo>DUNGEON</TitleSubTypo>
          </TitleNameWrapper>
        </TitleWrapper>
        <Divider />
        <Description>Play event dungeons, and earn rewards that are only available in those dungeons!</Description>
        <StageCardList>
          <StageCardItem>
            <StageCardBg />
            <StageInfoWrapper>
              <StageTitleWrapper>
                <StageTag>SPECIAL 1</StageTag>
                <StageNameTypo>DMTS Special Dungeon</StageNameTypo>
              </StageTitleWrapper>
              <StageDescription>
                From November 2nd to 4th, 2023, for a total of 3 days, we are hosting a special event dungeon in
                celebration of the Digital Media Tech Show (DMTS). During this period, participants have the opportunity
                to acquire limited-edition NFTs, FCT tokens, and KOA tokens.
              </StageDescription>
              <StageButtonWrapper>
                <StagePlayButton onClick={() => startGame()}>PLAY</StagePlayButton>
              </StageButtonWrapper>
            </StageInfoWrapper>
          </StageCardItem>
        </StageCardList>
      </BodyWrapper>
    </RightContainer>
  );
};

export default React.memo(RightStage);
