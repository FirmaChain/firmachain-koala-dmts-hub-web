import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useScreen from '../../../hooks/useScreen';
import useCustomNavigate from '../../../hooks/useCustomNavigate';

import { NavItem } from '../../../interface/navData';
import Desktop from './render/desktop';
import Mobile from './render/mobile';

const Nav = () => {
  const location = useLocation();
  const navigate = useCustomNavigate();
  const { isMobile, isHide } = useScreen();

  const [isDesktop, setDesktop] = useState(true);
  const [loaded, setLoad] = useState(false);

  const handleMenuItemClick = (menu: NavItem) => {
    navigate(menu.id);
  };

  const isActiveMenu = (id: string) => {
    if (id.split('/')[1] === '') {
      return location.pathname === id;
    } else {
      return location.pathname.startsWith(`/${id.split('/')[1]}`);
    }
  };

  useEffect(() => setLoad(true), []);
  useEffect(() => setDesktop(!isMobile), [isMobile]);

  return loaded && isHide === false && isDesktop ? (
    <Desktop handleMenuItemClick={handleMenuItemClick} isActiveMenu={isActiveMenu} />
  ) : (
    <Mobile handleMenuItemClick={handleMenuItemClick} isActiveMenu={isActiveMenu} />
  );
};

export default React.memo(Nav);
