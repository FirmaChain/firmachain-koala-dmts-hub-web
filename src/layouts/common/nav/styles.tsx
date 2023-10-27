import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const NavContainer = styled.div<{
  $isHovered: boolean;
  $collapsed: boolean;
}>`
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.navBackground};
  overflow-y: auto;
  transition: width 0.1s;
  transition-timing-function: easy-out;

  ${({ $collapsed }) => ($collapsed ? 'width:70px;padding:0 10px;' : 'width:250px;padding:0 24px;')}

  ${({ $collapsed, $isHovered }) =>
    ($collapsed || $isHovered) &&
    `
    position:absolute;
    top:0;
    left:0;
    z-index:20;
    `}
`;

export const NavMobileContainer = styled.div<{
  $isMobilNavCollapsed: boolean;
}>`
  width: 250px;
  height: 100%;
  padding: 0 24px;
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.navBackground};
  overflow-y: auto;
  transition: width 0.15s;
  transition-timing-function: easy-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  ${({ $isMobilNavCollapsed }) => !$isMobilNavCollapsed && 'width:0;padding:0;'}
`;

export const TopContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BottomContainer = styled.div<{ $collapsed: boolean }>`
  width: 100%;
  box-sizing: content-box;
  padding-top: 24px;
  padding-bottom: 24px;
  min-height: 80px;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  background-color: ${({ theme }) => theme.colors.navBackground};

  ${({ $collapsed }) =>
    $collapsed &&
    `
      display:none;
    `}
`;

export const NavLogo = styled(ReactSVG)<{ $collapsed: boolean }>`
  svg {
    display: flex;
    width: ${({ $collapsed }) => ($collapsed ? '34px' : '195px')};
    height: 34px;
    min-height: 34px;
  }
  margin: 16px ${({ $collapsed }) => ($collapsed ? '8px' : '0')};
`;

export const NavLine = styled(ReactSVG)<{ $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? '51px' : '195px')};
  height: 6px;
  opacity: 0.5;
  margin-bottom: 30px;
  overflow: hidden;
  svg {
    fill: ${({ theme }) => theme.colors.white};
    display: flex;
    margin: 0;
    padding: 0;
    height: 6px;
  }
`;

export const NavTitleTypo = styled.div<{ $collapsed: boolean }>`
  width: 100%;
  margin-bottom: 16px;
  padding-left: 14px;
  color: ${({ theme }) => theme.colors.navTitle};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;

  ${({ $collapsed }) =>
    $collapsed &&
    `
      padding-left: 0;
      text-align:center;
    `}
`;

export const NavList = styled.div<{ $collapsed: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;

  ${({ $collapsed }) =>
    $collapsed &&
    `
      & > div > div:nth-child(2) {
        display:none;
      }
    `}
`;

export const MenuItem = styled.div<{ $active: boolean }>`
  width: 100%;
  height: 45px;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  ${({ $active, theme }) =>
    $active
      ? `
      color: ${theme.colors.white};
      background-color:${theme.colors.navActiveBackground};
      border: 1px solid ${theme.colors.navActive};
      border-radius: 10px;
      & > div {font-weight:600};
      svg {
        fill: ${theme.colors.navActive};
      }
      `
      : `
      color: ${theme.colors.navDefault};
      background-color:none;
      border: 1px solid transparent;
      & > div {font-weight:500};
      svg {
        fill: ${theme.colors.navDefault};
      }
      `}
`;

export const MenuIcon = styled(ReactSVG)`
  svg {
    width: 18px;
    height: 18px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuTypo = styled.div`
  flex: 1;
  margin-top: -1px;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.sizes.font15};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.navDivider};
`;

export const ContactUsTitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navContactUsTitle};
`;

export const ContactUsList = styled.div`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.navContactUsBackground};
`;

export const ContactUsItem = styled(ReactSVG)`
  svg {
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.colors.navContactUsTitle};
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
