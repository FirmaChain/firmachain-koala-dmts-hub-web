import React from 'react';
import { useSelector } from 'react-redux';

import useTheme from '../../../hooks/useTheme';
import useCustomNavigate from '../../../hooks/useCustomNavigate';
import { rootState } from '../../../redux/reducers';

import { SubMenuContainer, SubMenuList, SubMenuItem, DotDivider } from './styles';

const AccountSubmenu = ({ type }: { type: string }) => {
  const { address } = useSelector((state: rootState) => state.wallet);
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  return (
    <SubMenuContainer>
      <SubMenuList>
        <SubMenuItem $active={type === 'assets'} onClick={() => navigate(`/accounts/${address}/assets`)}>
          ASSETS
        </SubMenuItem>
        <DotDivider src={theme.urls.dotDivider} />
        <SubMenuItem $active={type === 'activity'} onClick={() => navigate(`/accounts/${address}/activity`)}>
          ACTIVITY
        </SubMenuItem>
      </SubMenuList>
    </SubMenuContainer>
  );
};

export default React.memo(AccountSubmenu);
