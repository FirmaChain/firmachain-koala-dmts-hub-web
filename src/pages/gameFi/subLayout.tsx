import React from 'react';
import { Outlet } from 'react-router-dom';

import useTheme from '../../hooks/useTheme';
import useScrollToTop from '../../hooks/useScrollTop';
import useCustomNavigate from '../../hooks/useCustomNavigate';

import {
  ContentsContainer,
  DotDivider,
  GameFiWrapper,
  SubmenuContainer,
  SubmenuItem,
  SubmenuList,
} from '../../styles/gameFi';

const GameFiMenuData = [
  {
    id: 'staking',
    displayName: 'STAKING',
  },
  {
    id: 'swap',
    displayName: 'SWAP',
  },
  {
    id: 'lppool',
    displayName: 'LP-POOL',
  },
];

const GameFiSubLayout = ({ type }: { type: string }) => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  useScrollToTop();

  return (
    <>
      <SubmenuContainer>
        <SubmenuList>
          {GameFiMenuData.map((menu, index) => {
            return (
              <React.Fragment key={index}>
                <SubmenuItem $active={type === menu.id} onClick={() => navigate(`/koala-fi/${menu.id}`)}>
                  {menu.displayName}
                </SubmenuItem>
                {index < GameFiMenuData.length - 1 && <DotDivider src={theme.urls.dotDivider} />}
              </React.Fragment>
            );
          })}
        </SubmenuList>
      </SubmenuContainer>
      <ContentsContainer>
        <GameFiWrapper>
          <Outlet />
        </GameFiWrapper>
      </ContentsContainer>
    </>
  );
};

export default React.memo(GameFiSubLayout);
