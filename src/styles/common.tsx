import styled from 'styled-components';

export const MainContainer = styled.div<{ $isSmall: boolean; $isMobile: boolean; $isDesktopNavCollapsed: boolean }>`
  width: 100%;
  font-family: Poppins;
  height: calc(var(--vh, 1vh) * 100);
  min-height: calc(var(--vh, 1vh) * 100);
  max-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  padding: 0;
  color: black;
  background-color: ${({ theme }) => theme.colors.background};

  & > div:nth-child(3) {
    ${({ $isSmall, $isMobile, $isDesktopNavCollapsed }) =>
      ($isSmall || $isDesktopNavCollapsed) && !$isMobile && 'margin-left:70px'};
  }
`;

export const ContentsContainer = styled.div`
  flex: 1;
  line-height: auto;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
`;
