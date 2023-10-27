import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -50px;
  margin-bottom: 50px;

  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    padding: 0 120px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    padding: 0 40px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.eventBorder};
  background: #f7f7f7;
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

export const EventIcon = styled(ReactSVG)`
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HeaderTypo = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.font28};
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

export const RankList = styled.div`
  width: 100%;
  padding: 30px 36px 40px 36px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const RankItem = styled.div<{ $active: boolean }>`
  position: relative;
  width: 100%;
  padding: 26px 34px 34px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 calc(100% / 3 - 40px / 3);
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background: #fff;
  gap: 14px;

  ${({ $active }) =>
    $active &&
    `
      border: 1px solid #f2702a;
      & > div:nth-child(2) > div:nth-child(2) > div {
        color:#f2702a;
      }
      & > div:nth-child(1) {
        border: 1px solid #f2702a;
        background: #f2702a;
        color: #fff;
      }
    `}
`;

export const RankItemTop = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
`;

export const RankItemDivider = styled.div`
  width: 100%;
  height: 1px;
  min-height: 1px;
  background: #e9e9e9;
`;

export const ProfileIcon = styled.div<{ $src: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: gray;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const NickNameTypo = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #363c60;
  leading-trim: both;
  text-edge: cap;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const AddressTypo = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const RankItemBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomLabel = styled.div`
  color: #7c7c7c;
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
`;

export const BottomValue = styled.div`
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
`;

export const RankIndex = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 7px;
  border: 1px solid #d3d3d3;
  background: #eee;

  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const CommingSoonTypo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #363c60;
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 700;
`;
