import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useScreen from '../../hooks/useScreen';
import useScrollToTop from '../../hooks/useScrollTop';

const LeaderboardLayout = () => {
  const { expandedNavDesktop } = useScreen();

  useEffect(() => expandedNavDesktop(), [expandedNavDesktop]);

  useScrollToTop();

  return <Outlet />;
};

export default React.memo(LeaderboardLayout);
