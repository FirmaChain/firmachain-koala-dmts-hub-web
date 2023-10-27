import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useScreen from '../../hooks/useScreen';
import useScrollToTop from '../../hooks/useScrollTop';

const MarketplaceLayout = () => {
  const { collapsedNavDesktop } = useScreen();

  useEffect(() => collapsedNavDesktop(), [collapsedNavDesktop]);

  useScrollToTop();

  return <Outlet />;
};

export default React.memo(MarketplaceLayout);
