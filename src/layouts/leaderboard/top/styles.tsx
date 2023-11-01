import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const LeaderboardTopCaontainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 418px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const LeaderboardTopWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 490px;
  opacity: 0.45;
  z-index: 1;
  background-image: url('${({ theme }) => theme.urls.inventoryBg}');
`;

export const Background1 = styled.div`
  position: absolute;
  top: 30px;
  right: 460px;
  width: 220px;
  height: 220px;
  z-index: 2;
  background-image: url('${({ theme }) => theme.urls.leaderboardBg1}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Background2 = styled.div`
  position: absolute;
  top: 30px;
  right: 230px;
  width: 220px;
  height: 220px;
  z-index: 2;
  background-image: url('${({ theme }) => theme.urls.leaderboardBg2}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Background3 = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 220px;
  height: 220px;
  z-index: 2;
  background-image: url('${({ theme }) => theme.urls.leaderboardBg3}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Background4 = styled.div`
  position: absolute;
  top: x;
  right: 150px;
  width: 420px;
  height: 488px;
  z-index: 1;
  background-image: url('${({ theme }) => theme.urls.leaderboardBg4}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BorderLine = styled(ReactSVG)`
  overflow: hidden;
  & > div {
    width: 374px;
    height: 3px;
    display: flex;
  }
  svg {
    rect {
      fill: ${({ theme }) => theme.colors.textPrimary};
    }
    width: 374px;
    height: 3px;
  }

  margin-top: 5px;
  margin-bottom: 15px;
`;

export const TopSection = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

export const SectionTitleTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font50};
  font-weight: 900;
  margin-top: 50px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.textPrimary};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.textPrimary}, 2px 2px ${({ theme }) => theme.colors.textPrimary},
    3px 3px ${({ theme }) => theme.colors.textPrimary}, 4px 4px ${({ theme }) => theme.colors.textPrimary},
    5px 5px ${({ theme }) => theme.colors.textPrimary}, 6px 6px ${({ theme }) => theme.colors.textPrimary};
`;

export const SectionDescription = styled.div`
  margin-top: 8px;
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 1.4;
`;

export const TopCardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  z-index: 2;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    flex-direction: column;
  }
`;

export const TopCard = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  border-radius: 10px;
  border: 1px solid #363c60;
  background: #fff;
  gap: 10px;
`;

export const TopCardTitleTypo = styled.div`
  color: #f88b3b;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
`;

export const TopCardValueTypo = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font30};
  font-weight: 600;
`;
