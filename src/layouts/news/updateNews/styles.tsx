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

export const UpdateList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 36px;
  gap: 20px;

  align-items: stretch;
`;

export const UpdateItem = styled.div<{ $special?: boolean }>`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $special, theme }) =>
    $special ? `border: 1px solid  ${theme.colors.questBorder};` : `border: 1px solid ${theme.colors.eventBorder};`};
`;

export const UpdateImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 240px;
  min-height: 240px;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
  margin-top: -2px;
`;

export const UpdateDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 34px;
`;

export const UpdateTitleWrapper = styled.div`
  width: 100%;
  height: 30px;
  max-height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UpdateLabel = styled.div`
  display: flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.labelBg};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const UpdateTitleTypo = styled.div`
  width: 240px;
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DescriptionTypo = styled.div`
  width: 100%;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.eventSub};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
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
