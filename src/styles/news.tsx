import styled from 'styled-components';

export const NewsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 70px 120px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 70px 40px;
  }
`;

export const NewsWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
