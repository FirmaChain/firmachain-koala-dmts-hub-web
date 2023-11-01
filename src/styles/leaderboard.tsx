import styled from 'styled-components';

export const LeaderboardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  justify-content: center;
`;

export const LeaderboardWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 60px;
`;
