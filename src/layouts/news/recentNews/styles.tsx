import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background-color: ${({ theme }) => theme.colors.cardEventBg};
`;

export const CardHeader = styled.div`
  width: 100%;
  padding: 16px 14px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.eventBorder};
`;

export const CardLabel = styled.div`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.eventIcon};
`;

export const UpdateIcon = styled(ReactSVG)`
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HeaderTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font30};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardDivider = styled.div`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 280px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ExternalLinkIcon = styled(ReactSVG)`
  svg {
    width: 32px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.eventSub};
  }
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 36px;
  gap: 20px;
`;

export const NewsItem = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};

  &:hover {
    & > div:nth-child(1) {
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NewsImage = styled.div<{ $src: string }>`
  width: 380px;
  min-width: 380px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: transform 0.5s ease;
`;

export const NewsDescriptionWrapper = styled.div`
  width: 100%;
  max-height: 250px;
  z-index: 2;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 30px 26px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 30px;
    max-height: none;
  }
`;

export const NewsDescriptionTitleTypo = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  line-height: 1.6;
`;

export const NewsDescriptionTypo = styled.div`
  overflow: hidden;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.newsDescription};
  white-space: pre-line;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;
