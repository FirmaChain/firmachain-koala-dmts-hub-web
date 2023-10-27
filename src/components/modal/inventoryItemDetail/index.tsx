import React, { useEffect, useState } from 'react';

import Modal from '../base/modal';
import useModal from '../../../hooks/useModal';
import useTheme from '../../../hooks/useTheme';

import { NftData } from '../../../interface/nft';

import {
  ButtonWrapper,
  DescriptionTitleTypo,
  DescriptionTypo,
  DescriptionWrapper,
  Divider,
  InvenItemBody,
  InvenItemDetailContainer,
  InvenItemHeader,
  InvenItemLeft,
  InvenItemRight,
  ItemIdLabel,
  ItemImage,
  ItemImageWrapper,
  ItemNameTypo,
  ItemTypeIcon,
  ItemTypeIconWrapper,
  MarketButton,
  MarketButtonLabelTypo,
  MarketButtonTextWrapper,
  MarketButtonValueTypo,
  MarketIcon,
  PropertiesTitleTypo,
  PropertiesWrapper,
  Property,
  PropertyDescTypo,
  PropertyList,
  PropertyNameTypo,
  PropertyValueTypo,
  SendButton,
  Blank,
  CloseButton,
  FCTBg,
  BackgroundBox,
} from './styles';

const InventoryItemDetail = () => {
  const { theme } = useTheme();
  const { closeModal, props } = useModal();

  const [itemType, setItemType] = useState(0);

  const [nft, setNft] = useState<NftData>({
    nftId: '200000',
    name: 'wild wolf hat',
    description:
      'LensBird, the web3 version of Flappy Bird, is taking its first flight from Lens Protocol.\n\nLensBird is a hyper-casual game that everyone can play and enjoy together with their friends and followers on Lenster. In short, for the first time in the web3 gaming history, LensBird combines the elements of gameplay and socialising.\n\nLensBird is a hyper-casual game that everyone can play and enjoy together with their friends and followers on Lenster. In short, for the first time in the web3 gaming history, LensBird combines the elements of gameplay and socialising.',
    imageURI: theme.urls.dummyNft20,
    metaURI: '',
    identity: '',
    attributes: [
      { key: 'Category', value: 'Emblem', description: '0.004%' },
      { key: 'Rarity', value: 'Rare', description: '0.004%' },
      { key: 'Charactor', value: 'Pink Teddy', description: '0.004%' },
    ],
  });

  useEffect(() => {
    if (props) {
      setItemType(props.itemType);
      if (props.nft) {
        setNft(props.nft);

        console.log(props.nft);
      }
    }
  }, [props]);

  const onCloseModal = () => {
    closeModal();
  };

  return (
    <Modal visible={true} onClose={onCloseModal} width={'1100px'}>
      <InvenItemDetailContainer $accent={itemType === 2}>
        <InvenItemHeader>
          {itemType > 0 ? (
            <ItemTypeIconWrapper>
              <ItemTypeIcon src={itemType === 1 ? theme.urls.inventoryNonNft : theme.urls.inventoryNft} />
            </ItemTypeIconWrapper>
          ) : (
            <Blank />
          )}
          <ItemNameTypo>{nft.name}</ItemNameTypo>
          <CloseButton src={theme.urls.close} onClick={() => onCloseModal()} />
        </InvenItemHeader>
        <InvenItemBody>
          <InvenItemLeft>
            <ItemImageWrapper>
              <ItemImage $src={nft.imageURI} />
            </ItemImageWrapper>
            {<ItemIdLabel># {nft.nftId}</ItemIdLabel>}
          </InvenItemLeft>
          <InvenItemRight>
            <PropertiesWrapper>
              <PropertiesTitleTypo>Properties</PropertiesTitleTypo>
              <PropertyList>
                {nft.attributes.map((attribute, index) => (
                  <Property key={index}>
                    <PropertyNameTypo>{attribute.key}</PropertyNameTypo>
                    <PropertyValueTypo>{attribute.value}</PropertyValueTypo>
                    <PropertyDescTypo>{attribute.description}</PropertyDescTypo>
                  </Property>
                ))}
              </PropertyList>
            </PropertiesWrapper>
            <Divider />
            <DescriptionWrapper>
              <DescriptionTitleTypo>Description</DescriptionTitleTypo>
              <DescriptionTypo>{nft.description}</DescriptionTypo>
            </DescriptionWrapper>
            {itemType > 0 && (
              <ButtonWrapper>
                <MarketButton>
                  <MarketIcon src={theme.urls.navMarketplace} />
                  <MarketButtonTextWrapper>
                    <MarketButtonLabelTypo>AVG</MarketButtonLabelTypo>
                    <MarketButtonValueTypo>0.0024 FCT</MarketButtonValueTypo>
                  </MarketButtonTextWrapper>
                </MarketButton>
                {itemType === 1 && <SendButton>Send to NFT</SendButton>}
              </ButtonWrapper>
            )}
          </InvenItemRight>
          {itemType === 2 && (
            <BackgroundBox>
              <FCTBg src={theme.urls.inventoryFCTBg} />
            </BackgroundBox>
          )}
        </InvenItemBody>
      </InvenItemDetailContainer>
    </Modal>
  );
};

export default React.memo(InventoryItemDetail);
