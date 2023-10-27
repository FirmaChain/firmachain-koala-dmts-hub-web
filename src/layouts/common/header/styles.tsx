import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { BsQuestionCircle } from 'react-icons/bs';

export const HeaderContainer = styled.div<{ $background: string; $borderColor: string }>`
  top: 0;
  z-index: 10;
  position: sticky;
  min-height: 66px;
  height: 66px;
  border-bottom: 2px solid
    ${({ $borderColor, theme }) => ($borderColor ? $borderColor : theme.colors.headerDefaultBorder)};
  background-color: ${({ $background, theme }) => ($background ? $background : theme.colors.headerDefaultBg)};
  transition: background-color 0.5s ease;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    margin: 0 20px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const GuideButtonWrapper = styled.div<{ $color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${({ $color }) => $color && `& > * {color:${$color} !important;}`}
`;

export const GuideIcon = styled(BsQuestionCircle)`
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 23px;
  height: 23px;
`;

export const GuideTypo = styled.div`
  margin-top: 2px;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ConnectButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px 18px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const WalletIcon = styled(ReactSVG)`
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 26px;
    height: 26px;
  }
`;

export const ConnectTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.28px;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 20px 10px 0;
  gap: 10px;
`;

export const BackIcon = styled(ReactSVG)`
  width: 12px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const BackTypo = styled.div`
  color: ${({ theme }) => theme.colors.navBack};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const AccountWrapper = styled.div<{ $borderColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${({ $borderColor, theme }) =>
    $borderColor &&
    `
      & > div:nth-child(2) { border-color:${$borderColor}; }
      & > div:nth-child(3) { border-color:${$borderColor}; }
      & > div:nth-child(3) > div:nth-child(2) { background:${$borderColor !== theme.colors.white && $borderColor}; }
    `}
`;
export const NotificationWrapper = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NotificationButton = styled(ReactSVG)<{ $color?: string }>`
  width: 30px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }
  svg {
    fill: ${({ theme, $color }) => ($color ? $color : theme.colors.textPrimary)};
    width: 30px;
    height: 30px;
  }
`;

export const ProfileWrapper = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ProfileButton = styled(ReactSVG)<{ $color?: string }>`
  width: 30px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 30px;
    height: 30px;
  }
  svg {
    fill: ${({ theme, $color }) => ($color ? $color : theme.colors.textPrimary)};
    width: 28px;
    height: 28px;
  }
`;

export const RoundWrapper = styled.div`
  min-width: 180px;
  height: 36px;
  padding: 8px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.headerDefaultBorder};
  background: ${({ theme }) => theme.colors.white};
`;

export const CurrencyIcon = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BalanceTypo = styled.div`
  width: 100%;
  padding-left: 7px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const DrowdownIcon = styled(ReactSVG)`
  width: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-bottom: 1px;
    width: 10px;
    height: 5px;
  }
`;

export const ProfileMobile = styled(ReactSVG)`
  width: 20px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 20px;
    height: 20px;
  }
`;

export const ProfileIcon = styled(ReactSVG)`
  width: 20px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 20px;
    height: 20px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  min-width: 2px;
  margin: 0 7px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.headerDefaultBorder};
`;

export const WalletNameTypo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.28px;
`;

export const DropDownMenuWrapper = styled.div<{ $isMobile: boolean }>`
  position: absolute;
  display: flex;
  top: 66px;
  right: 20px;
  ${({ $isMobile }) =>
    $isMobile &&
    `
      width:100%;right:0;
      & > div { width:100%; top:0; right:0; }
    `}
`;

const DropDownMenu = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  gap: 20px;
  transition: all 0.05s linear;
  border-radius: 0px 0px 20px 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.headerDefaultBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerDefaultBorder};
  border-left: 1px solid ${({ theme }) => theme.colors.headerDefaultBorder};
  background: ${({ theme }) => theme.colors.white};

  ${({ $active }) => !$active && 'height:0;border:0;padding:0 30px !important;& > div {display:none;}'}
`;

export const DropDownMenuWallet = styled(DropDownMenu)`
  width: 330px;
  top: 0;
  right: 0;
`;

export const DropDownMenuAssets = styled(DropDownMenu)`
  width: 280px;
  top: 0;
  right: 190px;
`;

export const DropDownMenuNotifications = styled(DropDownMenu)`
  width: 510px;
  top: 0;
  right: 378px;
`;

export const WalletProfileWrapper = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background: d3d3d3;
`;

export const ProfileImageWrapper = styled.div`
  width: 70px;
  min-width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.div<{ $src?: string }>`
  width: 100%;
  height: 100%;
  background-image: url('${({ theme, $src }) => ($src ? $src : theme.urls.homeSectionTopChar5)}');
  background-size: ${({ $src }) => ($src ? 'contain' : '65%')};
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme, $src }) => ($src ? 'none' : theme.colors.accountProfileBg)};
`;

export const WalletInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: stretch;
`;

export const WalletInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WalletInfoNameTypo = styled.div`
  color: #363c60;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  line-height: 22px;
`;

export const WalletInfoAddressTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const WalletInfoCopyWrapper = styled.div`
  width: 20px;
  min-width: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3px;
`;

export const CopyButton = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #7c7c7c;
    width: 16px;
    height: 16px;
  }
`;

export const MenuGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 6px;
`;

export const GroupTitleWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const GroupTitleTypo = styled.div`
  flex-grow: 0;
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
`;

export const GroupDivider = styled.div`
  flex-grow: 1;
  height: 2px;
  background: #f1f1f1;
`;

export const GroupItemList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GroupItem = styled.div`
  width: 100%;
  height: 40px;
  gap: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ItemIcon = styled(ReactSVG)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 18px;
    height: 18px;
    margin-top: 3px;
  }
`;

export const ItemTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const FCTIcon = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyFCT}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const KOAIcon = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ theme }) => theme.urls.currencyKOA}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TicketIcon = styled.div`
  width: 30px;
  height: 15px;
  background-image: url('${({ theme }) => theme.urls.ticketIcon}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CurrencyTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const CurrencyBalanceTypo = styled.div`
  width: 100%;
  text-align: right;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 600;
`;

export const CurrencyBalanceTypoSub = styled(CurrencyBalanceTypo)`
  font-weight: 500;
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 6px;
`;

export const NotificationTitleWrapper = styled.div`
  width: 100%;
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
`;

export const NotificationTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const NotificationCountTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const EmptyNotification = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 16px;
`;

export const NotificationList = styled.div<{ $isScroll: boolean }>`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ $isScroll }) => $isScroll && '& > div {width:calc(100% - 10px);}'}
`;

export const NotificationItem = styled.div`
  width: calc(100%);
  display: flex;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background: #f7f7f7;
  gap: 14px;
`;

export const NotificationIconWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: #fff;
`;

export const NotificationIcon = styled(ReactSVG)`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 26px;
    height: 26px;
  }
`;

export const NotificationInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NotificationNameTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const NotificationDescription = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font13};
  font-weight: 500;
  line-height: 18px;
`;

export const NotificationDateTypo = styled.div`
  color: #7c7c7c;
  text-align: right;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
  line-height: 16px;
`;

export const SocialLinkIcon = styled(ReactSVG)`
  position: absolute;
  cursor: pointer;
  top: -2px;
  right: -1px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
  }
`;
