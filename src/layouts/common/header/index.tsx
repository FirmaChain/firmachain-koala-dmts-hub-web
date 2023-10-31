import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import Burger from '../../../components/buger';
import useTheme from '../../../hooks/useTheme';
import useScreen from '../../../hooks/useScreen';
import useOutsideClick from '../../../hooks/useOutsideClick';
import useCustomNavigate from '../../../hooks/useCustomNavigate';
import useDropDown from '../../../hooks/useDropdown';
import useModal from '../../../hooks/useModal';
import useWallet from '../../../hooks/useWallet';

import { rootState } from '../../../redux/reducers';
import { walletActions } from '../../../redux/action';
import { createTextEllipsis, stringToSeed } from '../../../utils/common';

import {
  HeaderContainer,
  HeaderWrapper,
  LeftWrapper,
  GuideButtonWrapper,
  GuideIcon,
  GuideTypo,
  ConnectButtonWrapper,
  WalletIcon,
  ConnectTypo,
  BackButton,
  BackIcon,
  BackTypo,
  AccountWrapper,
  NotificationButton,
  RoundWrapper,
  CurrencyIcon,
  BalanceTypo,
  DrowdownIcon,
  ProfileIcon,
  Divider,
  WalletNameTypo,
  DropDownMenuWrapper,
  DropDownMenuWallet,
  DropDownMenuAssets,
  DropDownMenuNotifications,
  NotificationWrapper,
  WalletProfileWrapper,
  LogoutWrapper,
  ProfileImageWrapper,
  ProfileImage,
  WalletInfoWrapper,
  WalletInfo,
  WalletInfoNameTypo,
  WalletInfoAddressTypo,
  WalletInfoCopyWrapper,
  CopyButton,
  MenuGroupWrapper,
  GroupTitleWrapper,
  GroupTitleTypo,
  GroupDivider,
  GroupItemList,
  GroupItem,
  ItemIcon,
  ItemTypo,
  CurrencyTypo,
  FCTIcon,
  CurrencyBalanceTypo,
  KOAIcon,
  CurrencyBalanceTypoSub,
  TicketIcon,
  ProfileWrapper,
  ProfileButton,
  NotificationTitleWrapper,
  NotificationTitleTypo,
  NotificationCountTypo,
  NotificationList,
  NotificationItem,
  NotificationIconWrapper,
  NotificationIcon,
  NotificationInfo,
  NotificationNameTypo,
  NotificationDescription,
  NotificationDateTypo,
  EmptyNotification,
  SocialLinkIcon,
  DemoLabel,
} from './styles';

interface IProps {
  background?: string;
  color?: string;
  borderColor?: string;
}

// const notificationList = [];
// const notificationList = [0, 1];
const notificationList = [0, 1, 2, 3, 4, 5];

const Header = ({ background, color, borderColor }: IProps) => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const { isMobile } = useScreen();
  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const { isLogin } = useWallet();
  const navigate = useCustomNavigate();
  const [isOpenDropDown, setOpenDropDown] = useDropDown();

  const { address, balance, tokenBalance } = useSelector((state: rootState) => state.wallet);

  const [locationName, setLocationName] = useState('');
  const [isActiveBackButton, setActiveBackButton] = useState(false);
  const [dropDownType, setDropDownType] = useState(0);

  const dropDownRef = useRef(null);
  const walletButtonRef = useRef(null);
  const assetsButtonRef = useRef(null);
  const notiButtonRef = useRef(null);
  const profileButtonRef = useRef(null);

  useEffect(() => {
    const paths = pathname.split('/').filter((v) => v !== '');
    if (paths.length > 0) {
      setLocationName(paths[0].toLocaleUpperCase());
    } else {
      setLocationName('KOALA KNIGHTS');
    }

    setActiveBackButton(checkActiveBackButton(paths));
  }, [pathname]);

  useOutsideClick([dropDownRef, walletButtonRef, assetsButtonRef, notiButtonRef, profileButtonRef], () => {
    isOpenDropDown && setOpenDropDown(false);
  });

  const checkActiveBackButton = (paths: string[]) => {
    return paths.length >= 2 && ['quests', 'events', 'marketplace', 'nfts'].includes(paths[0]);
  };

  const handleDropDown = (type: number) => {
    if (type === dropDownType) {
      setOpenDropDown(!isOpenDropDown);
    } else {
      setOpenDropDown(true);
    }

    setDropDownType(type);
  };

  const handleHistoryBack = () => {
    navigate(-1);
  };

  const handleConnect = () => {
    handleWalletConnectModal();
  };

  const handleLogout = () => {
    setOpenDropDown(false);
    walletActions.handleWalletAddress('');
    walletActions.handleWalletBalance('0');
    walletActions.handleWalletTokenBalance('0');
  };

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

  return (
    <HeaderContainer $background={background} $borderColor={borderColor}>
      <HeaderWrapper>
        <LeftWrapper>
          {isMobile && <Burger color={theme.colors.textPrimary} />}

          {isActiveBackButton && !isMobile ? (
            <BackButton onClick={() => handleHistoryBack()}>
              <BackIcon src={theme.urls.back2} />
              <BackTypo>Back</BackTypo>
            </BackButton>
          ) : (
            <GuideButtonWrapper $color={color}>
              <GuideIcon />
              <GuideTypo>{locationName}</GuideTypo>
            </GuideButtonWrapper>
          )}
          <DemoLabel>DEMO VERSION</DemoLabel>
        </LeftWrapper>
        {isLogin() ? (
          <AccountWrapper $borderColor={borderColor}>
            <NotificationWrapper ref={notiButtonRef} onClick={() => handleDropDown(2)}>
              <NotificationButton src={theme.urls.notification} $color={color} />
            </NotificationWrapper>
            {isMobile ? (
              <ProfileWrapper ref={profileButtonRef} onClick={() => handleDropDown(0)}>
                <ProfileButton src={theme.urls.profile} />
              </ProfileWrapper>
            ) : (
              <>
                <RoundWrapper onClick={() => handleDropDown(1)} ref={walletButtonRef}>
                  <CurrencyIcon />
                  <BalanceTypo>
                    {balance} <span>FCT</span>
                  </BalanceTypo>
                  <DrowdownIcon src={theme.urls.dropDown} />
                </RoundWrapper>
                <RoundWrapper onClick={() => handleDropDown(0)} ref={assetsButtonRef}>
                  <ProfileIcon src={theme.urls.profile} />
                  <Divider />
                  <WalletNameTypo>Koala #{stringToSeed(address)}</WalletNameTypo>
                </RoundWrapper>
              </>
            )}
          </AccountWrapper>
        ) : (
          <ConnectButtonWrapper onClick={() => handleConnect()}>
            <WalletIcon src={theme.urls.walletIcon} />
            <ConnectTypo>WALLET CONNECT</ConnectTypo>
          </ConnectButtonWrapper>
        )}
      </HeaderWrapper>
      <DropDownMenuWrapper ref={dropDownRef} $isMobile={isMobile}>
        <DropDownMenuWallet $active={isOpenDropDown && dropDownType === 0}>
          <WalletProfileWrapper>
            <ProfileImageWrapper>
              <ProfileImage />
            </ProfileImageWrapper>
            <WalletInfoWrapper>
              <WalletInfo>
                <WalletInfoNameTypo>Koala #{stringToSeed(address)}</WalletInfoNameTypo>
                <WalletInfoAddressTypo>{createTextEllipsis(address, 8, 8)}</WalletInfoAddressTypo>
              </WalletInfo>
              <WalletInfoCopyWrapper>
                <CopyButton src={theme.urls.copy} />
              </WalletInfoCopyWrapper>
            </WalletInfoWrapper>
          </WalletProfileWrapper>
          <MenuGroupWrapper>
            <GroupTitleWrapper>
              <GroupTitleTypo>MY ACCOUNT</GroupTitleTypo>
              <SocialLinkIcon src={theme.urls.socialLink} />
              <GroupDivider />
            </GroupTitleWrapper>
            <GroupItemList>
              <GroupItem onClick={() => navigate(`/accounts/${address}/assets`)}>
                <ItemIcon src={theme.urls.assets} />
                <ItemTypo>Assets</ItemTypo>
              </GroupItem>
              <GroupItem onClick={() => navigate(`/accounts/${address}/activity`)}>
                <ItemIcon src={theme.urls.activity} />
                <ItemTypo>Activity</ItemTypo>
              </GroupItem>
              <GroupItem>
                <ItemIcon src={theme.urls.settings} />
                <ItemTypo>Settings</ItemTypo>
              </GroupItem>
            </GroupItemList>
          </MenuGroupWrapper>
          {isMobile && (
            <MenuGroupWrapper>
              <GroupTitleWrapper>
                <GroupTitleTypo>MY ASSETS</GroupTitleTypo>
                <GroupDivider />
              </GroupTitleWrapper>
              <GroupItemList>
                <GroupItem>
                  <KOAIcon />
                  <CurrencyTypo>KOA</CurrencyTypo>
                  <CurrencyBalanceTypoSub>{tokenBalance}</CurrencyBalanceTypoSub>
                </GroupItem>
                <GroupItem>
                  <FCTIcon />
                  <CurrencyTypo>FCT</CurrencyTypo>
                  <CurrencyBalanceTypo>{balance}</CurrencyBalanceTypo>
                </GroupItem>
                <GroupItem>
                  <TicketIcon />
                  <CurrencyBalanceTypoSub>3</CurrencyBalanceTypoSub>
                </GroupItem>
              </GroupItemList>
            </MenuGroupWrapper>
          )}
          <GroupDivider />
          <LogoutWrapper>
            <GroupItemList>
              <GroupItem onClick={() => handleLogout()}>
                <ItemIcon src={theme.urls.logout} />
                <ItemTypo>Logout</ItemTypo>
              </GroupItem>
            </GroupItemList>
          </LogoutWrapper>
        </DropDownMenuWallet>
        <DropDownMenuAssets $active={isOpenDropDown && dropDownType === 1}>
          <MenuGroupWrapper>
            <GroupItemList>
              <GroupItem>
                <KOAIcon />
                <CurrencyTypo>KOA</CurrencyTypo>
                <CurrencyBalanceTypoSub>{tokenBalance}</CurrencyBalanceTypoSub>
              </GroupItem>
              <GroupItem>
                <FCTIcon />
                <CurrencyTypo>FCT</CurrencyTypo>
                <CurrencyBalanceTypo>{balance}</CurrencyBalanceTypo>
              </GroupItem>
              <GroupDivider />
              <GroupItem>
                <TicketIcon />
                <CurrencyBalanceTypoSub>0</CurrencyBalanceTypoSub>
              </GroupItem>
            </GroupItemList>
          </MenuGroupWrapper>
        </DropDownMenuAssets>
        <DropDownMenuNotifications $active={isOpenDropDown && dropDownType === 2}>
          <NotificationTitleWrapper>
            <NotificationTitleTypo>NOTIFICATION</NotificationTitleTypo>
            <NotificationCountTypo>{notificationList.length}</NotificationCountTypo>
          </NotificationTitleWrapper>
          {notificationList.length === 0 ? (
            <EmptyNotification>No notifications yet</EmptyNotification>
          ) : (
            <NotificationList $isScroll={notificationList.length > 2}>
              {notificationList.map((v) => (
                <NotificationItem key={v}>
                  <NotificationIconWrapper>
                    <NotificationIcon src={theme.urls.navMarketplace} />
                  </NotificationIconWrapper>
                  <NotificationInfo>
                    <NotificationNameTypo>Marketplace</NotificationNameTypo>
                    <NotificationDescription>
                      #8796 'Red-Eyes Greatsword' has been sold. ed-Eyes Greatsword' has been sold.
                    </NotificationDescription>
                    <NotificationDateTypo>12min ago</NotificationDateTypo>
                  </NotificationInfo>
                </NotificationItem>
              ))}
            </NotificationList>
          )}
        </DropDownMenuNotifications>
      </DropDownMenuWrapper>
    </HeaderContainer>
  );
};

export default React.memo(Header);
