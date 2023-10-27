import React, { useEffect } from 'react';

import NotFoundContainer from '../layouts/notFound';

import useScreen from '../hooks/useScreen';

import { ContentsContainer } from '../styles/common';

const NotFound = () => {
  const { expandedNavDesktop } = useScreen();

  useEffect(() => expandedNavDesktop(), [expandedNavDesktop]);

  return (
    <ContentsContainer>
      <NotFoundContainer />
    </ContentsContainer>
  );
};

export default React.memo(NotFound);
