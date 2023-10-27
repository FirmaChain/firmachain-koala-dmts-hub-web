import React from 'react';
import { useSnackbar } from 'notistack';

import useTheme from '../../../hooks/useTheme';
import useWallet from '../../../hooks/useWallet';
import useModal from '../../../hooks/useModal';
import { walletActions } from '../../../redux/action';

import CardBg from '../../../components/cardBg';

import {
  BorderLine,
  CanvasWrapper,
  ProgressLabel,
  ProgressValue,
  ProgressWrapper,
  StageCard,
  StageIcon,
  StageIconWrapper,
  StageInfo,
  StageInfoWrapper,
  StageSubTitleTypo,
  StageTitleTypo,
} from './styles';

const WorldCanvasStage = ({ setActiveRight }: { setActiveRight: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { theme } = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const { openModal } = useModal();
  const { isLogin } = useWallet();

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

  const onActiveRight = () => {
    if (isLogin()) {
      setActiveRight(true);
    } else {
      handleWalletConnectModal();
    }
  };

  return (
    <CanvasWrapper>
      <StageCard $active={false}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage1} />
          </StageIconWrapper>
          <StageInfoWrapper $active={false}>
            <StageTitleTypo>SCENARIO</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={false} />
            <ProgressWrapper>
              <ProgressLabel>COMMING SOON</ProgressLabel>
              <ProgressValue></ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>

      <StageCard $active={true} onClick={() => onActiveRight()}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage2} />
          </StageIconWrapper>
          <StageInfoWrapper $active={true}>
            <StageTitleTypo>EVENT</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={true} />
            <ProgressWrapper>
              <ProgressLabel>Stage progress</ProgressLabel>
              <ProgressValue>1</ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>

      <StageCard $active={false}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage3} />
          </StageIconWrapper>
          <StageInfoWrapper $active={false}>
            <StageTitleTypo>USER</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={false} />
            <ProgressWrapper>
              <ProgressLabel>COMMING SOON</ProgressLabel>
              <ProgressValue></ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>

      <StageCard $active={false}>
        <CardBg />
        <StageInfo>
          <StageIconWrapper>
            <StageIcon $src={theme.urls.worldStage4} />
          </StageIconWrapper>
          <StageInfoWrapper $active={false}>
            <StageTitleTypo>PARTERSHIP</StageTitleTypo>
            <StageSubTitleTypo>DUNGEON</StageSubTitleTypo>
            <BorderLine src={theme.urls.borderLine} $active={false} />
            <ProgressWrapper>
              <ProgressLabel>COMMING SOON</ProgressLabel>
              <ProgressValue></ProgressValue>
            </ProgressWrapper>
          </StageInfoWrapper>
        </StageInfo>
      </StageCard>
    </CanvasWrapper>
  );
};

export default React.memo(WorldCanvasStage);
