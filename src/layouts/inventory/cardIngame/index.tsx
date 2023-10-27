import React from 'react';

import useModal from '../../../hooks/useModal';
import useTheme from '../../../hooks/useTheme';

import {
  InventoryCard,
  InvenCount,
  InvenIcon,
  InvenCountTypo,
  SortWrapper,
  SortSelect,
  InvenItemList,
  InvenItem,
  InvenRightTitle,
  InvenRightTitleTypo,
  InvenRightCorner,
  InvenRightContents,
  InvenItemImage,
  InvenTopInfo,
  InvenButtonWrapper,
  SendNftButton,
  ButtonTypo,
  BoldSpan,
  ArrowIcon,
  InvenItemId,
} from './styles';

const CardNft = () => {
  const { theme } = useTheme();
  const { openModal } = useModal();

  const handleDetailModal = (itemType: number) => {
    openModal({ type: 'inventoryItemDetail', props: { itemType } });
  };

  return (
    <InventoryCard>
      <InvenRightTitle>
        <InvenRightTitleTypo>IN GAME</InvenRightTitleTypo>
        <InvenRightCorner src={theme.urls.inventoryCorner} />
      </InvenRightTitle>
      <InvenRightContents>
        <InvenTopInfo>
          <InvenCount>
            <InvenIcon src={theme.urls.navInventory} />
            <InvenCountTypo>50</InvenCountTypo>
          </InvenCount>
          <SortWrapper>
            <SortSelect>
              <option>Grade hight to low</option>
            </SortSelect>
          </SortWrapper>
        </InvenTopInfo>
        <InvenItemList>
          {[33, 34, 35, 36, 37, 38, 39].map((v) => (
            <InvenItem $status={2} key={v} onClick={() => handleDetailModal(2)}>
              <InvenItemImage src={theme.urls[`dummyNft${v}`]} />
              <InvenItemId>{`#201${v}`}</InvenItemId>
            </InvenItem>
          ))}

          <InvenItem $status={0} onClick={() => handleDetailModal(0)}>
            <InvenItemImage src={theme.urls[`dummyNft20`]} />
          </InvenItem>
        </InvenItemList>

        <InvenButtonWrapper>
          <SendNftButton onClick={() => {}}>
            <ArrowIcon src={theme.urls.inventoryButtonArrow} />
            <ButtonTypo>
              Send multiple to
              <BoldSpan> MY NFT</BoldSpan>
            </ButtonTypo>
          </SendNftButton>
        </InvenButtonWrapper>
      </InvenRightContents>
    </InventoryCard>
  );
};

export default React.memo(CardNft);
