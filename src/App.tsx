import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import useViewport from './hooks/useViewport';
import useScreen from './hooks/useScreen';
import useWallet from './hooks/useWallet';

import Loading from './components/loading';
import Nav from './layouts/common/nav';

import './fonts.css';
import './default.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MainContainer } from './styles/common';
import MobileGuideLine from './layouts/mobile';

function App() {
  const { isXSmall, isSmall, isMobile, isDesktopNavCollapsed } = useScreen();
  const [loaded, setLoad] = useState(false);

  useViewport();
  useWallet();

  useEffect(() => {
    setTimeout(() => setLoad(true), 1000);
  }, []);

  return (
    <BrowserRouter>
      <MainContainer $isSmall={isSmall} $isMobile={isMobile} $isDesktopNavCollapsed={isDesktopNavCollapsed}>
        {isXSmall ? (
          <MobileGuideLine />
        ) : (
          <React.Fragment>
            <Loading isLoading={!loaded} />
            <Nav />
            <Routes />
          </React.Fragment>
        )}
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
