import styled from 'styled-components';

export const InventoryContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const InventoryWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 50px;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('${({ theme }) => theme.urls.inventoryBg}');
`;

export const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black}B3;
`;
