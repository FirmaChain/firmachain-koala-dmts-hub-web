import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const GovernanceContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 70px 50px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 70px 40px;
  }
`;

export const GovernanceWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const GovernanceCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 220px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardDivider};
`;

export const TopTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font40};
  font-weight: 700;
`;

export const BorderLine = styled(ReactSVG)`
  width: 280px;
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

export const CommingsoonLabelTypo = styled.div`
  height: 48px;
  padding: 14px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.buttonThemeBg1};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 400;
`;

export const DescriptionTypo = styled.div`
  width: 100%;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  line-height: 24px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  padding: 40px 50px 60px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const IntroItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IntroTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IndexWrapper = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  position: relative;
`;

export const IndexBg = styled.div`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-45deg);
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.questBorder};
`;

export const IndexTypo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font30};
  font-weight: 600;
`;

export const IntroTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font30};
  font-weight: 500;
`;

export const IntroDescriptionWrapper = styled.div`
  width: 100%;
  padding: 30px 50px 50px 50px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.questBorder};
  background: ${({ theme }) => theme.colors.stakingCardBg2};
`;

export const DescriptionContents = styled.div`
  width: 100%;
  height: 240px;
  max-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroDescriptionTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 22px;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LinkChainIcon = styled(ReactSVG)`
  width: 100px;
  height: 100px;
  svg {
    width: 100px;
    height: 100px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const LinkLabel = styled.div`
  padding: 16px 40px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.questBorder};
`;

export const VoteWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VoteImage = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  width: 328px;
  height: 158px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 0px 10px 10px 0px;
  background: ${({ theme }) => theme.colors.cardGameFiSubBg};
`;

export const VoteButton = styled.div`
  width: 180px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 500;
`;

export const GovMessageBox = styled.div`
  position: absolute;
  top: -3px;
  right: -25px;
  width: 173px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('${({ theme }) => theme.urls.govCardBg}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const GovMessageTypo1 = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
`;

export const GovMessageTypo2 = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 600;
  margin-bottom: 20px;
`;
