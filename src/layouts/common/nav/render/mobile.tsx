import React from 'react';

import useTheme from '../../../../hooks/useTheme';
import useScreen from '../../../../hooks/useScreen';

import { NavItem, navDataMenu, navDataChain } from '../../../../interface/navData';

import {
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
  NavMobileContainer,
} from '../styles';

interface IProps {
  handleMenuItemClick: (menu: NavItem) => void;
  isActiveMenu: (id: string) => boolean;
}

const Mobile = ({ handleMenuItemClick, isActiveMenu }: IProps) => {
  const { theme } = useTheme();
  const { isMobilNavCollapsed } = useScreen();

  const renderMenu = (item: NavItem) => {
    return (
      <MenuItem key={item.id} onClick={() => handleMenuItemClick(item)} $active={isActiveMenu(item.id)}>
        <MenuIcon src={`${theme.urls[item.icon]}`} />
        <MenuTypo>{item.name}</MenuTypo>
      </MenuItem>
    );
  };

  return (
    <NavMobileContainer $isMobilNavCollapsed={isMobilNavCollapsed}>
      <TopContainer>
        <NavLogo $collapsed={false} src={theme.urls.navSmallLogo} />
        <NavLine $collapsed={false} src={theme.urls.navLine} />
        <NavTitleTypo $collapsed={false}>MENU</NavTitleTypo>
        <NavList $collapsed={false}>{navDataMenu.map(renderMenu)}</NavList>
        <Divider />
        <NavTitleTypo $collapsed={false}>CHAIN</NavTitleTypo>
        <NavList $collapsed={false}>{navDataChain.map(renderMenu)}</NavList>
      </TopContainer>

      <BottomContainer $collapsed={false}>
        <ContactUsTitleTypo>Contact us</ContactUsTitleTypo>
        <ContactUsList>
          <ContactUsItem src={theme.urls['contactMedium']} />
          <ContactUsItem src={theme.urls['contactReddit']} />
          <ContactUsItem src={theme.urls['contactTelegram']} />
          <ContactUsItem src={theme.urls['contactTwitter']} />
        </ContactUsList>
      </BottomContainer>
    </NavMobileContainer>
  );
};

export default React.memo(Mobile);
