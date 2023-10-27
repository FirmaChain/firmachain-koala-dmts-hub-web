import React from 'react';

import Ticket from './ticket';
import Token from './token';

interface IProps {
  subType: string;
}

const SwapDetail = ({ subType }: IProps) => {
  return subType === 'token' ? <Token /> : <Ticket />;
};

export default React.memo(SwapDetail);
