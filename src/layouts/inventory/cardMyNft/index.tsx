import React from 'react';

import useModal from '../../../hooks/useModal';
import useTheme from '../../../hooks/useTheme';

import { NftData } from '../../../interface/nft';
import LoadingInner from '../../../components/loadingInner';

import {
  InventoryCard,
  InvenLeftTitle,
  InvenLeftTitleTypo,
  InvenLeftCorner,
  InvenTopInfo,
  InvenCount,
  InvenIcon,
  InvenCountTypo,
  SortWrapper,
  SortSelect,
  InvenItemList,
  InvenItem,
  InvenButtonWrapper,
  SendNftButton,
  ButtonTypo,
  ArrowIcon,
  BoldSpan,
  InvenLeftContents,
  InvenItemImage,
  FCTBg,
  InvenItemId,
} from './styles';

interface IProps {
  setActiveSendModal: React.Dispatch<React.SetStateAction<boolean>>;
  nftList: NftData[];
  isLoading: boolean;
}

const CardNonNft = ({ setActiveSendModal, nftList, isLoading }: IProps) => {
  const { theme } = useTheme();
  const { openModal } = useModal();

  const handleSend = () => {
    setActiveSendModal(true);
  };

  const handleDetailModal = (itemType: number, nft?: NftData) => {
    openModal({ type: 'inventoryItemDetail', props: { itemType, nft } });
  };

  return (
    <InventoryCard>
      <InvenLeftTitle>
        <InvenLeftTitleTypo>MY NFT</InvenLeftTitleTypo>
        <InvenLeftCorner src={theme.urls.inventoryCorner} />
      </InvenLeftTitle>
      <InvenLeftContents>
        {isLoading && <LoadingInner isLoading={true} />}

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
          {nftList.map((nft, index) => (
            <InvenItem $status={1} $selected={true} key={index} onClick={() => handleDetailModal(0, nft)}>
              <InvenItemImage src={nft.imageURI} />
              <InvenItemId>{`#${nft.nftId}`}</InvenItemId>
            </InvenItem>
          ))}
          {[20, 21, 22, 23, 24, 25].map((v) => (
            <InvenItem $status={1} key={v} onClick={() => handleDetailModal(1)}>
              <InvenItemImage src={theme.urls[`dummyNft${v}`]} />
              <InvenItemId>{`#201${v}`}</InvenItemId>
            </InvenItem>
          ))}

          {[26, 27, 28, 29, 30, 31, 32].map((v) => (
            <InvenItem $status={1} key={v} onClick={() => handleDetailModal(1)}>
              <InvenItemImage src={theme.urls[`dummyNft${v}`]} />
              <InvenItemId>{`#201${v}`}</InvenItemId>
            </InvenItem>
          ))}
        </InvenItemList>
        <InvenButtonWrapper>
          <SendNftButton onClick={() => handleSend()}>
            <ButtonTypo>
              Send multiple to
              <BoldSpan> NFT</BoldSpan>
            </ButtonTypo>
            <ArrowIcon src={theme.urls.inventoryButtonArrow} />
          </SendNftButton>
        </InvenButtonWrapper>

        <FCTBg src={theme.urls.inventoryFCTBg} />
      </InvenLeftContents>
    </InventoryCard>
  );
};

export default React.memo(CardNonNft);
