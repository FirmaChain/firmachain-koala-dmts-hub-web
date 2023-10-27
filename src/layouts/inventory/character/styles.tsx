import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const CharacterWrapper = styled.div`
  width: 380px;
  min-width: 380px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TooltipWrapper = styled.div<{ $activeModal: boolean }>`
  width: 100%;
  height: 140px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${({ $activeModal }) => $activeModal && 'z-index:11;'}

  & > div > div {
    height: ${({ $activeModal }) => ($activeModal ? '140px' : '90px')};
  }
`;

export const ChracterInfo = styled.div`
  width: 100%;
  padding: 8px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CharacterInfoTypo = styled.div`
  color: ${({ theme }) => theme.colors.buttonBorder};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 700;
`;

export const CharacterBorderLine = styled(ReactSVG)`
  width: 100%;
  overflow: hidden;
  & > div {
    width: 374px;
    height: 3px;
    display: flex;
  }
  svg {
    rect {
      fill: ${({ theme }) => theme.colors.cardDivider};
    }
    width: 374px;
    height: 3px;
  }
`;

export const EquipTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
`;

export const SendTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CharacterImageWrapper = styled.div<{ $activeModal: boolean }>`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ $activeModal }) => $activeModal && 'z-index:11;'}
`;

export const CharacterIdle = styled.div`
  width: 180px;
  height: 180px;
  z-index: 2;
  margin-top: 50px;
  background-image: url('${({ theme }) => theme.urls.inventoryCharIdle}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const CharactorFloat = styled(ReactSVG)`
  position: absolute;
  bottom: 0;
`;

export const EquipSlotList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EquipSlotItem = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EquipItemImage = styled.img`
  z-index: 2;
  width: 100px;
  heigth: 100px;
  image-rendering: pixelated;
`;

export const EquipItemStatusIcon = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  z-index: 3;
  position: absolute;
  top: 15px;
  left: 15px;
  svg {
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const EquipSlotBg = styled(ReactSVG)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NftGuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;

export const NftGuide = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NftGuideIcon = styled(ReactSVG)`
  width: 26px;
  height: 26px;
  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 26px;
    height: 26px;
  }
`;

export const NftGuideTypo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.sizes.font15};
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
`;

export const InvenItemId = styled.div`
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 5;
  display: inline-flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #fff;
  color: #4e4e4e;
  font-size: 10px;
  font-weight: 500;
`;
