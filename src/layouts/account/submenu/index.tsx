import React from 'react';

import useTheme from '../../../hooks/useTheme';

import { SubMenuContainer, SubMenuList, SubMenuItem, DotDivider } from './styles';

const AccountSubmenu = ({ type }: { type: string }) => {
  const { theme } = useTheme();

  return (
    <SubMenuContainer>
      <SubMenuList>
        <SubMenuItem $active={type === 'assets'}>ASSETS</SubMenuItem>
        <DotDivider src={theme.urls.dotDivider} />
        <SubMenuItem $active={type === 'activity'}>ACTIVITY</SubMenuItem>
      </SubMenuList>
    </SubMenuContainer>
  );
};

export default React.memo(AccountSubmenu);
