import styled from 'styled-components';

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.canvasBg};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    align-items: flex-start;
    padding-top: 100px;
  }
`;
