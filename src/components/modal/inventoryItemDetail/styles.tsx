import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const InvenItemDetailContainer = styled.div<{ $accent: boolean }>`
  width: 100%;
  height: 670px;
  min-height: 670px;
  max-height: 670px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $accent, theme }) =>
    $accent &&
    `
      border: 1px solid ${theme.colors.inventoryBorder};
      & > div:nth-child(1) {
        border-bottom: 2px solid ${theme.colors.inventoryBorder};
        background: ${theme.colors.inventoryBg4};
      }
      & > div:nth-child(1) > div:nth-child(1) {
        background: ${theme.colors.inventoryBorder};
        border:0;
      }
      & > div:nth-child(1) > div:nth-child(1) > div > div > svg {
        fill:${theme.colors.white};
      }
      & > div:nth-child(1) > div:nth-child(2) {
        color: ${theme.colors.inventoryBorder};
      }
      & > div:nth-child(1) > div:nth-child(3) > div > svg {
        fill: ${theme.colors.inventoryBorder};
      }
    `}
`;

export const InvenItemHeader = styled.div`
  width: 100%;
  height: 74px;
  min-height: 74px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px 20px 0 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inventoryBg5};
  gap: 20px;
`;

export const ItemTypeIconWrapper = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inventoryBg6};
`;

export const ItemTypeIcon = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 30px;
    height: 30px;
  }
`;

export const ItemNameTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 600;
`;

export const InvenItemBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  align-items: stretch;
  gap: 30px;
`;

export const InvenItemLeft = styled.div`
  width: 190px;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ItemImageWrapper = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.inventoryBg7};
`;

export const ItemImage = styled.div<{ $src: string }>`
  width: 166px;
  height: 166px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;

export const ItemIdLabel = styled.div`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  line-height: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
  letter-spacing: -0.24px;
`;

export const InvenItemRight = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PropertiesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

export const PropertiesTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.inventoryBg};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.invenDivider};
`;

export const PropertyList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Property = styled.div`
  width: calc(100% / 3 - 7px);
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.invenDivider};
  background: ${({ theme }) => theme.colors.inventoryBg5};
`;

export const PropertyNameTypo = styled.div`
  color: ${({ theme }) => theme.colors.inventoryBg};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 600;
  margin-bottom: 4px;
`;

export const PropertyValueTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
  margin-bottom: 8px;
`;

export const PropertyDescTypo = styled.div`
  color: ${({ theme }) => theme.colors.inventoryBg};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
`;

export const DescriptionTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.inventoryBg};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 600;
`;

export const DescriptionTypo = styled.div`
  color: ${({ theme }) => theme.colors.inventoryBg};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
  overflow-y: auto;
`;

export const MarketButton = styled.div`
  display: flex;
  width: 180px;
  height: 60px;
  padding: 0 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.white};
`;

export const MarketIcon = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const MarketButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MarketButtonLabelTypo = styled.div`
  color: ${({ theme }) => theme.colors.inventoryBg};
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 600;
`;
export const MarketButtonValueTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;

export const SendButton = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.buttonThemeBorder1};
  background: ${({ theme }) => theme.colors.buttonThemeBg1};
`;

export const Blank = styled.div`
  width: 5px;
`;

export const CloseButton = styled(ReactSVG)`
  position: absolute;
  top: 27px;
  right: 27px;
  cursor: pointer;

  width: 20px;
  height: 20px;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 20px;
    height: 20px;
  }
`;

export const BackgroundBox = styled.div`
  position: absolute;
  bottom: 1px;
  left: 1px;
  width: 250px;
  height: 220px;
  overflow: hidden;
  border-radius: 0 0 0 20px;
`;

export const FCTBg = styled(ReactSVG)`
  position: absolute;
  bottom: -260px;
  left: -150px;
  z-index: 0;
  transform: rotate(0deg);
  svg {
    width: 400px;
    height: 460px;
    fill: ${({ theme }) => theme.colors.eventIcon};
  }
`;
