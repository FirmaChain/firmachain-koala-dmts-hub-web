import { styled } from 'styled-components';
import { ReactSVG } from 'react-svg';

export const GameFiContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  position: relative;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 120px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const SubmenuContainer = styled.div`
  width: 100%;
  height: 70px;
  position: sticky;
  top: 66px;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.buttonBorder};
`;

export const GameFiWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmenuList = styled.div`
  width: 100%;
  height: calc(100% + 2px);
  position: relative;
  display: flex;
  align-items: center;
`;

export const SubmenuItem = styled.div<{ $active: boolean }>`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.font18};
  color: ${({ theme }) => theme.colors.submenuDefault};
  font-weight: 600;
  cursor: pointer;

  ${({ $active, theme }) =>
    $active &&
    `
        color: ${theme.colors.submenuActive};
        font-weight: 700;
        padding-top: 6px;
        border-bottom: 6px solid  ${theme.colors.submenuActive};
    `}
`;

export const DotDivider = styled(ReactSVG)`
  width: 3px;
  min-width: 3px;
  height: 18px;
  svg {
    fill: ${({ theme }) => theme.colors.accountDivider};
    width: 3px;
    height: 18px;
  }
`;

export const StakingContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

export const StakingDetailContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StakingDetailBottomCardWrapper = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const SwapContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const LppoolContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
