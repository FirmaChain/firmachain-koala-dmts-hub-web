import React, { useState, useEffect } from 'react';

import useTheme from '../../../../hooks/useTheme';
import useScreen from '../../../../hooks/useScreen';

import { NavItem, navDataMenu, navDataChain } from '../../../../interface/navData';
import { MEDIUM, REDDIT, TELEGRAM, TWITTER } from '../../../../constant/common';

import {
  NavContainer,
  NavLogo,
  NavLine,
  NavTitleTypo,
  NavList,
  MenuItem,
  MenuIcon,
  MenuTypo,
  Divider,
  BottomContainer,
  ContactUsTitleTypo,
  ContactUsList,
  ContactUsItem,
  TopContainer,
} from '../styles';

interface IProps {
  handleMenuItemClick: (menu: NavItem) => void;
  isActiveMenu: (id: string) => boolean;
}

const Desktop = ({ handleMenuItemClick, isActiveMenu }: IProps) => {
  const { theme } = useTheme();
  const { isSmall, isDesktopNavCollapsed } = useScreen();

  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(isHovered ? false : isSmall || isDesktopNavCollapsed);
  }, [isSmall, isDesktopNavCollapsed, isHovered]);

  useEffect(() => {
    setIsHovered(false);
  }, [isDesktopNavCollapsed]);

  const handleMouseEnter = () => isCollapsed && setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const renderMenu = (item: NavItem) => {
    return (
      <MenuItem key={item.id} onClick={() => handleMenuItemClick(item)} $active={isActiveMenu(item.id)}>
        <MenuIcon src={`${theme.urls[item.icon]}`} />
        <MenuTypo>{item.name}</MenuTypo>
      </MenuItem>
    );
  };

  return (
    <NavContainer
      $isHovered={isHovered}
      $collapsed={isCollapsed}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TopContainer>
        <NavLogo $collapsed={isCollapsed} src={isCollapsed ? theme.urls.navSmallLogo : theme.urls.navLogo} />
        <NavLine $collapsed={isCollapsed} src={theme.urls.navLine} />
        <NavTitleTypo $collapsed={isCollapsed}>MENU</NavTitleTypo>
        <NavList $collapsed={isCollapsed}>{navDataMenu.map(renderMenu)}</NavList>
        <Divider />
        <NavTitleTypo $collapsed={isCollapsed}>CHAIN</NavTitleTypo>
        <NavList $collapsed={isCollapsed}>{navDataChain.map(renderMenu)}</NavList>
      </TopContainer>

      <BottomContainer $collapsed={isCollapsed}>
        <ContactUsTitleTypo>Contact us</ContactUsTitleTypo>
        <ContactUsList>
          <ContactUsItem src={theme.urls['contactMedium']} onClick={() => window.open(MEDIUM)} />
          <ContactUsItem src={theme.urls['contactReddit']} onClick={() => window.open(REDDIT)} />
          <ContactUsItem src={theme.urls['contactTelegram']} onClick={() => window.open(TELEGRAM)} />
          <ContactUsItem src={theme.urls['contactTwitter']} onClick={() => window.open(TWITTER)} />
        </ContactUsList>
      </BottomContainer>
    </NavContainer>
  );
};

export default React.memo(Desktop);
