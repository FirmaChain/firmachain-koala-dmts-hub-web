import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TooltipBase = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};

  transition: height 0.2s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    bottom: -11px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
    border-right: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  }
`;

export const TooltipShadow = styled(TooltipBase)`
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.inventoryBg};
  color: transparent;
  transform: translate(0px, 5px);

  transition: height 0.2s ease-in-out;

  &:after {
    background-color: ${({ theme }) => theme.colors.inventoryBg};
  }
`;
