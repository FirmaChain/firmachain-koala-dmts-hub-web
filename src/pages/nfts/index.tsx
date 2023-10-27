import React, { useEffect } from 'react';
import useCustomNavigate from '../../hooks/useCustomNavigate';

const NftRedirect = () => {
  const navigate = useCustomNavigate();

  useEffect(() => {
    navigate('/marketplace');
  }, [navigate]);

  return null;
};

export default React.memo(NftRedirect);
