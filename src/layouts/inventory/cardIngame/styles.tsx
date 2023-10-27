import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const InventoryCard = styled.div`
  width: 440px;
  min-width: 440px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InvenRightTitle = styled.div`
  position: relative;
  width: 350px;
  height: 74px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 20px 20px 0px 0px;
  background: ${({ theme }) => theme.colors.inventoryBg2};
  justify-content: flex-end;
  align-self: flex-end;
`;

export const InvenRightIcon = styled(ReactSVG)`
  width: 36px;
  height: 36px;
  svg {
    width: 36px;
    height: 36px;
    fill: ${({ theme }) => theme.colors.inventoryBg3};
  }
`;

export const InvenRightTitleTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font32};
  font-weight: 900;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.inventoryBg2};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.cardDivider};
`;

export const InvenRightCorner = styled(ReactSVG)`
  display: flex;
  position: absolute;
  bottom: -3px;
  left: -20px;
  transform: scaleX(-1);
  svg {
    fill: ${({ theme }) => theme.colors.inventoryBg2};
    width: 20px;
    height: 18px;
  }
`;

export const InvenRightContents = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 220px);
  max-height: 800px;
  padding: 20px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  background: rgba(255, 255, 255, 0.9);

  overflow: hidden;
  border-radius: 20px 0px 20px 20px;
`;

export const InvenTopInfo = styled.div`
  width: 100%;
  display: flex;
`;

export const InvenCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InvenIcon = styled(ReactSVG)`
  display: flex;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const InvenCountTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1px;
`;

export const SortWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SortSelect = styled.select`
  height: 100%;
  padding: 10px 50px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textPrimary};
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
`;

export const InvenItemList = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
`;

export const InvenItem = styled.div<{ $status: number; $selected?: boolean }>`
  width: 118px;
  height: 118px;
  max-height: 118px;
  cursor: pointer;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.invenBorder};
  background: ${({ $status, theme }) => ($status > 0 ? theme.colors.questDivider : theme.colors.invenDisableBg)};

  ${({ $selected, theme }) => $selected && `border: 4px solid ${theme.colors.buttonThemeBg1};`}
`;

export const FCTBg = styled(ReactSVG)`
  position: absolute;
  bottom: -150px;
  right: -10px;
  z-index: 0;
  svg {
    width: 287px;
    height: 332px;
    fill: ${({ theme }) => theme.colors.eventIcon};
  }
`;

export const InvenItemImage = styled.img`
  z-index: 2;
  width: 90px;
  heigth: 90px;
  image-rendering: pixelated;
`;

export const InvenItemId = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
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

export const InvenItemStatusIcon = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  z-index: 3;
  position: absolute;
  top: 4px;
  left: 4px;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const InvenButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
`;

export const SendNftButton = styled.div`
  width: 100%;
  padding: 16px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  background: ${({ theme }) => theme.colors.white};
  gap: 10px;
`;

export const ButtonTypo = styled.div`
  color: ${({ theme }) => theme.colors.buttonBorder};
  leading-trim: both;
  text-edge: cap;
  font-family: Poppins;
  font-size: ${({ theme }) => theme.sizes.font16};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BoldSpan = styled.span`
  font-weight: 700;
`;

export const ArrowIcon = styled(ReactSVG)`
  transform: scaleX(-1);
  display: flex;
  svg {
    width: 20px;
    height: 20px;
  }
`;
