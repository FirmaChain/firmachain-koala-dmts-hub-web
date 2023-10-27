import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const AmountWrapper = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  padding: 0 5px;
  display: flex;
  justify-content: center;
`;

export const Amount = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-right: 2px solid ${({ theme }) => theme.colors.cardDivider};

  &:last-child {
    border-right: 0;
  }
  &:nth-child(3) > div:last-child,
  &:nth-child(4) > div:last-child {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const AmountLabel = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const AmountValue = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 600;
`;
