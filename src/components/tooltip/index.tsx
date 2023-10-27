import React from 'react';
import { TooltipBase, TooltipShadow, TooltipWrapper } from './styles';

interface ITooltip {
  children: React.ReactNode;
}

const Tooltip = ({ children }: ITooltip) => (
  <TooltipWrapper>
    <TooltipShadow>{children}</TooltipShadow>
    <TooltipBase>{children}</TooltipBase>
  </TooltipWrapper>
);

export default React.memo(Tooltip);
