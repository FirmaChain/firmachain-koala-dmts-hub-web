import React from 'react';
import { useSelector } from 'react-redux';

import useTheme from '../../../hooks/useTheme';

import Tooltip from '../../../components/tooltip';
import { rootState } from '../../../redux/reducers';
import { stringToSeed } from '../../../utils/common';

import {
  CharacterWrapper,
  CharacterInfoTypo,
  CharacterBorderLine,
  ChracterInfo,
  EquipTypo,
  CharacterIdle,
  EquipSlotList,
  EquipSlotItem,
  EquipSlotBg,
  EquipItemImage,
  CharactorFloat,
  CharacterImageWrapper,
  NftGuideWrapper,
  NftGuide,
  NftGuideTypo,
  SendTypo,
  TooltipWrapper,
  InvenItemId,
} from './styles';

interface IProps {
  activeSendModal: boolean;
}

const Character = ({ activeSendModal }: IProps) => {
  const { theme } = useTheme();
  const { address } = useSelector((state: rootState) => state.wallet);
  return (
    <CharacterWrapper>
      <TooltipWrapper $activeModal={activeSendModal}>
        <Tooltip>
          {activeSendModal ? (
            <ChracterInfo>
              <CharacterInfoTypo>Send to multiple to NFT</CharacterInfoTypo>
              <CharacterBorderLine src={theme.urls.borderLine} />
              <SendTypo>
                After selecting several items
                <br />
                to transfer to NFT,
                <br />
                click the Send button!
              </SendTypo>
            </ChracterInfo>
          ) : (
            <ChracterInfo>
              <CharacterInfoTypo>Lv 1. {`Koala #${stringToSeed(address)}`}</CharacterInfoTypo>
              <CharacterBorderLine src={theme.urls.borderLine} />
              <EquipTypo>Equipped Item</EquipTypo>
            </ChracterInfo>
          )}
        </Tooltip>
      </TooltipWrapper>

      <CharacterImageWrapper $activeModal={activeSendModal}>
        <CharacterIdle />
        <CharactorFloat src={theme.urls.inventoryCharFloat} />
      </CharacterImageWrapper>
      <EquipSlotList>
        <EquipSlotItem>
          <EquipSlotBg src={theme.urls.inventoryEquipSlot1} />
          <EquipItemImage src={theme.urls.dummyNft30} />
          <InvenItemId>#12345</InvenItemId>

          {/* <EquipItemStatusIcon src={theme.urls.inventoryNft} /> */}
        </EquipSlotItem>

        <EquipSlotItem>
          <EquipSlotBg src={theme.urls.inventoryEquipSlot2} />
        </EquipSlotItem>
      </EquipSlotList>
      <NftGuideWrapper>
        <NftGuide>
          <NftGuideTypo>Equipped items can be moved after being removed from the game.</NftGuideTypo>
        </NftGuide>
      </NftGuideWrapper>
    </CharacterWrapper>
  );
};

export default React.memo(Character);
