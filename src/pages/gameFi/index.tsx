import React, { useEffect } from 'react';
import useCustomNavigate from '../../hooks/useCustomNavigate';

const GameFiRedirect = () => {
  const navigate = useCustomNavigate();

  useEffect(() => {
    navigate('/koala-fi/staking');
  }, [navigate]);

  return null;
};

export default React.memo(GameFiRedirect);
