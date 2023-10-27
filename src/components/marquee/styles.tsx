import styled, { keyframes } from 'styled-components';

const slide = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(-50%);
}
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const MarqueeContent = styled.div<{ $duration: number }>`
  display: inline-block;
  animation-name: ${slide};
  animation-duration: ${({ $duration }) => $duration}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const Typo = styled.span`
  padding-right: 80px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;
