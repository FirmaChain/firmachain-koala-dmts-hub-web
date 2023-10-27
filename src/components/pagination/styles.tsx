import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageNumber = styled.div<{ $active: boolean }>`
  cursor: pointer;
  padding: 10px;
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;
