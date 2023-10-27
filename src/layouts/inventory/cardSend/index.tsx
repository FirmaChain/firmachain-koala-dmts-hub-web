import React, { useState } from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  InventorySendCard,
  InvenTopInfo,
  InvenCount,
  InvenCountTypo,
  SortWrapper,
  SortSelect,
  InvenItemList,
  InvenItem,
  InvenButtonWrapper,
  InvenItemImage,
  InvenItemStatusIcon,
  InvenSendContents,
  InvenSendTitle,
  InvenSendTitleTypo,
  TitleHighlight,
  CloseButton,
  InvenMultiCheckIcon,
  SendButton,
} from './styles';

interface IProps {
  setActiveSendModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardSend = ({ setActiveSendModal }: IProps) => {
  const { theme } = useTheme();
  const [selectItemList, setSelectItemList] = useState<number[]>([]);

  const handleInvenItem = (index: number) => {
    setSelectItemList((prevSelectItemList) => {
      if (prevSelectItemList.includes(index)) {
        return prevSelectItemList.filter((item) => item !== index);
      } else {
        return [...prevSelectItemList, index];
      }
    });
  };

  return (
    <InventorySendCard>
      <InvenSendTitle>
        <InvenSendTitleTypo>
          SEND TO MULTIPLE TO <TitleHighlight>NFT</TitleHighlight>
        </InvenSendTitleTypo>
        <CloseButton src={theme.urls.close} onClick={() => setActiveSendModal(false)} />
      </InvenSendTitle>
      <InvenSendContents>
        <InvenTopInfo>
          <InvenCount>
            <InvenMultiCheckIcon src={theme.urls.multiCheeck} />
            <InvenCountTypo>{selectItemList.length}</InvenCountTypo>
          </InvenCount>
          <SortWrapper>
            <SortSelect>
              <option>Grade hight to low</option>
            </SortSelect>
          </SortWrapper>
        </InvenTopInfo>
        <InvenItemList>
          {[1, 2, 3, 4, 5].map((v) => (
            <InvenItem $status={1} $selected={selectItemList.includes(v)} key={v} onClick={() => handleInvenItem(v)}>
              <InvenItemStatusIcon src={theme.urls.inventoryNonNft} />
              <InvenItemImage src={theme.urls.dummyNft} />
            </InvenItem>
          ))}
        </InvenItemList>
        <InvenButtonWrapper>
          <SendButton>SEND</SendButton>
        </InvenButtonWrapper>
      </InvenSendContents>
    </InventorySendCard>
  );
};

export default React.memo(CardSend);
