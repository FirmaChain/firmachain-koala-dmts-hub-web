import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCustomNavigate from '../../hooks/useCustomNavigate';

const AccountRedirect = () => {
  const { address } = useParams();
  const navigate = useCustomNavigate();

  useEffect(() => {
    navigate(`/accounts/${address}/assets`);
  }, [navigate, address]);

  return null;
};

export default React.memo(AccountRedirect);
