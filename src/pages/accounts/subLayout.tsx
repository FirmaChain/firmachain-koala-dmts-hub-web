import React from 'react';
import { Outlet } from 'react-router-dom';

import useScrollToTop from '../../hooks/useScrollTop';

import Submenu from '../../layouts/account/submenu';

const AccountSubLayout = ({ type }: { type: string }) => {
  useScrollToTop();

  return (
    <>
      <Submenu type={type} />
      <Outlet />
    </>
  );
};

export default React.memo(AccountSubLayout);
