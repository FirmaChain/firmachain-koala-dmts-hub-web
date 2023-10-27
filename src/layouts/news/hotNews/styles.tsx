import styled from 'styled-components';

export const HotNewsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const NewsTitleTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font50};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.textPrimary};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.textPrimary}, 2px 2px ${({ theme }) => theme.colors.textPrimary},
    3px 3px ${({ theme }) => theme.colors.textPrimary}, 4px 4px ${({ theme }) => theme.colors.textPrimary},
    5px 5px ${({ theme }) => theme.colors.textPrimary}, 6px 6px ${({ theme }) => theme.colors.textPrimary};
`;

export const UpdateItem = styled.div<{ $special?: boolean }>`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $special, theme }) =>
    $special ? `border: 1px solid  ${theme.colors.questBorder};` : `border: 1px solid ${theme.colors.eventBorder};`};
`;

export const UpdateImage = styled.div<{ $src: string }>`
  flex: 1 1 100%;
  height: 480px;
  min-height: 480px;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px 0 0 10px;
`;

export const UpdateDescription = styled.div`
  flex: 1 1 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 34px;
`;

export const UpdateTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DescriptionTypo = styled.div`
  width: 100%;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.eventSub};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 1.6;
`;
