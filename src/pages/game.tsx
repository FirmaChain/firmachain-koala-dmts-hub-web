import React, { useEffect } from 'react';

import useScreen from '../hooks/useScreen';

import { ContentsContainer, ContentWrapper } from '../styles/common';

const Game = () => {
  const { hideNav } = useScreen();

  useEffect(() => hideNav(), [hideNav]);

  return (
    <ContentsContainer>
      <ContentWrapper>GAME</ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(Game);
