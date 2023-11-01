import React, { useEffect, useState } from 'react';

import useScreen from '../hooks/useScreen';
import useTheme from '../hooks/useTheme';
import useWallet from '../hooks/useWallet';
import { NftData } from '../interface/nft';

import Header from '../layouts/common/header';
import CardSend from '../layouts/inventory/cardSend';
import CardMyNft from '../layouts/inventory/cardMyNft';
import Character from '../layouts/inventory/character';
import CardIngame from '../layouts/inventory/cardIngame';

import { ContentsContainer, ContentWrapper } from '../styles/common';
import { InventoryContainer, InventoryWrapper, Background, BackgroundDim } from '../styles/inventory';

const Inventory = () => {
  const { theme } = useTheme();
  const { collapsedNavDesktop } = useScreen();
  const { getNftList } = useWallet();

  const [nftList, setNftList] = useState<NftData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [activeSendModal, setActiveSendModal] = useState(false);

  useEffect(() => collapsedNavDesktop(), [collapsedNavDesktop]);

  useEffect(() => {
    getNftList()
      .then((nftList) => {
        setLoading(false);
        setNftList(nftList);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ContentsContainer>
      <Header background={theme.colors.headerInvenBg} borderColor={theme.colors.headerEventBg} />
      <ContentWrapper>
        <InventoryContainer>
          <Background />
          {activeSendModal && <BackgroundDim onClick={() => setActiveSendModal(false)} />}
          <InventoryWrapper>
            {activeSendModal ? (
              <CardSend setActiveSendModal={setActiveSendModal} />
            ) : (
              <CardMyNft setActiveSendModal={setActiveSendModal} nftList={nftList} isLoading={isLoading} />
            )}
            <Character activeSendModal={activeSendModal} />
            <CardIngame />
          </InventoryWrapper>
        </InventoryContainer>
      </ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(Inventory);
