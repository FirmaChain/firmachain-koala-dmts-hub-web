import React, { useState } from 'react';

import useTheme from '../../../hooks/useTheme';
import { Checkbox } from '../../../components/checkbox';

import {
  ContentContainer,
  FilterContainer,
  FilterTitleWrapper,
  FilterListWrapper,
  NftContainer,
  NftTitleContainer,
  FilterTitle,
  NftTitle,
  SortWrapper,
  SortSelect,
  SortOption,
  RightWrapper,
  FilterCollapsedIcon,
  FilterTitleTypo,
  StatusWrapper,
  StatusTitleTypo,
  StatusList,
  StatusItem,
  StatusCount,
  CheckBoxWrapper,
  FilterList,
  FilterItem,
  FilterTypo,
  FilterArrow,
  ActivityListWrapper,
  ActivityTable,
  ActivityTableHeader,
  ActivityTableCell,
  ActivityTableRow,
  ActivityType,
  ActivityTypeIcon,
  ActivityTypeTypo,
  ActivityFromTypo,
  ActivityToTypo,
  CurrencyWrapper,
  ActivityFCTIcon,
  ActivityCurrencyTypo,
  ActivityTimeTypo,
  TxLinkIcon,
  ItemWrapper,
  ItemImageWrapper,
  ItemImage,
  ItemInfoWrapper,
  ItemNameTypo,
  ItemIdTypo,
} from './styles';

const AccountAssets = () => {
  const { theme } = useTheme();

  const [isChekced, setChecked] = useState(false);
  const [expended, setExpended] = useState(true);

  const handleFilterContainer = () => {
    setExpended(!expended);
  };

  return (
    <ContentContainer>
      <FilterContainer $expended={expended}>
        <FilterTitleWrapper>
          <FilterTitle>
            <FilterCollapsedIcon
              src={expended ? theme.urls.back : theme.urls.filter}
              onClick={() => handleFilterContainer()}
            />
            <FilterTitleTypo>FILTER</FilterTitleTypo>
          </FilterTitle>
        </FilterTitleWrapper>
        <FilterListWrapper>
          <StatusWrapper>
            <StatusTitleTypo>STATUS</StatusTitleTypo>
            <StatusList>
              <StatusItem>
                <CheckBoxWrapper>
                  <Checkbox checked={isChekced} onChange={setChecked}>
                    In Market-Listing
                  </Checkbox>
                </CheckBoxWrapper>

                <StatusCount>5</StatusCount>
              </StatusItem>
              <StatusItem>
                <CheckBoxWrapper>
                  <Checkbox checked={isChekced} onChange={setChecked}>
                    In Market-Listing
                  </Checkbox>
                </CheckBoxWrapper>

                <StatusCount>5</StatusCount>
              </StatusItem>
              <StatusItem>
                <CheckBoxWrapper>
                  <Checkbox checked={isChekced} onChange={setChecked}>
                    In Market-Listing
                  </Checkbox>
                </CheckBoxWrapper>

                <StatusCount>5</StatusCount>
              </StatusItem>
            </StatusList>
          </StatusWrapper>
          <FilterList>
            <FilterItem>
              <FilterTypo>Quantity</FilterTypo>
              <FilterArrow src={theme.urls.dropDown} />
            </FilterItem>
            <FilterItem>
              <FilterTypo>Currency</FilterTypo>
              <FilterArrow src={theme.urls.dropDown} />
            </FilterItem>
            <FilterItem>
              <FilterTypo>Traits</FilterTypo>
              <FilterArrow src={theme.urls.dropDown} />
            </FilterItem>
          </FilterList>
        </FilterListWrapper>
      </FilterContainer>
      <NftContainer>
        <NftTitleContainer>
          <NftTitle>
            <RightWrapper>
              <SortWrapper>
                <SortSelect>
                  <SortOption>Recent</SortOption>
                </SortSelect>
              </SortWrapper>
            </RightWrapper>
          </NftTitle>

          <ActivityTable>
            <ActivityTableHeader>
              <ActivityTableCell>Type</ActivityTableCell>
              <ActivityTableCell>Item</ActivityTableCell>
              <ActivityTableCell>Price</ActivityTableCell>
              <ActivityTableCell>From</ActivityTableCell>
              <ActivityTableCell>To</ActivityTableCell>
              <ActivityTableCell>Time</ActivityTableCell>
              <ActivityTableCell></ActivityTableCell>
            </ActivityTableHeader>
          </ActivityTable>
        </NftTitleContainer>
        <ActivityListWrapper>
          <ActivityTable>
            <ActivityTableRow>
              <ActivityTableCell>
                <ActivityType>
                  <ActivityTypeIcon src={theme.urls.activityIcon1} />
                  <ActivityTypeTypo>Transfer</ActivityTypeTypo>
                </ActivityType>
              </ActivityTableCell>
              <ActivityTableCell>
                <ItemWrapper>
                  <ItemImageWrapper>
                    <ItemImage />
                  </ItemImageWrapper>
                  <ItemInfoWrapper>
                    <ItemNameTypo>Beetle Sword</ItemNameTypo>
                    <ItemIdTypo># 26598</ItemIdTypo>
                  </ItemInfoWrapper>
                </ItemWrapper>
              </ActivityTableCell>
              <ActivityTableCell>
                <CurrencyWrapper>
                  <ActivityFCTIcon />
                  <ActivityCurrencyTypo>888888.888888</ActivityCurrencyTypo>
                </CurrencyWrapper>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityFromTypo>0xEbf03...7f0d</ActivityFromTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityToTypo>0xEbf03...7f0d</ActivityToTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityTimeTypo>42 minutes ago</ActivityTimeTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <TxLinkIcon src={theme.urls.externalLinkArrow2} />
              </ActivityTableCell>
            </ActivityTableRow>
            <ActivityTableRow>
              <ActivityTableCell>
                <ActivityType>
                  <ActivityTypeIcon src={theme.urls.activityIcon2} />
                  <ActivityTypeTypo>Listing</ActivityTypeTypo>
                </ActivityType>
              </ActivityTableCell>
              <ActivityTableCell>
                <ItemWrapper>
                  <ItemImageWrapper>
                    <ItemImage />
                  </ItemImageWrapper>
                  <ItemInfoWrapper>
                    <ItemNameTypo>Beetle Sword</ItemNameTypo>
                    <ItemIdTypo># 26598</ItemIdTypo>
                  </ItemInfoWrapper>
                </ItemWrapper>
              </ActivityTableCell>
              <ActivityTableCell>
                <CurrencyWrapper>
                  <ActivityFCTIcon />
                  <ActivityCurrencyTypo>888888.888888</ActivityCurrencyTypo>
                </CurrencyWrapper>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityFromTypo>0xEbf03...7f0d</ActivityFromTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityToTypo>0xEbf03...7f0d</ActivityToTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityTimeTypo>42 minutes ago</ActivityTimeTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <TxLinkIcon src={theme.urls.externalLinkArrow2} />
              </ActivityTableCell>
            </ActivityTableRow>
            <ActivityTableRow>
              <ActivityTableCell>
                <ActivityType>
                  <ActivityTypeIcon src={theme.urls.activityIcon3} />
                  <ActivityTypeTypo>Sales</ActivityTypeTypo>
                </ActivityType>
              </ActivityTableCell>
              <ActivityTableCell>
                <ItemWrapper>
                  <ItemImageWrapper>
                    <ItemImage />
                  </ItemImageWrapper>
                  <ItemInfoWrapper>
                    <ItemNameTypo>Beetle Sword</ItemNameTypo>
                    <ItemIdTypo># 26598</ItemIdTypo>
                  </ItemInfoWrapper>
                </ItemWrapper>
              </ActivityTableCell>
              <ActivityTableCell>
                <CurrencyWrapper>
                  <ActivityFCTIcon />
                  <ActivityCurrencyTypo>888888.888888</ActivityCurrencyTypo>
                </CurrencyWrapper>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityFromTypo>0xEbf03...7f0d</ActivityFromTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityToTypo>0xEbf03...7f0d</ActivityToTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityTimeTypo>42 minutes ago</ActivityTimeTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <TxLinkIcon src={theme.urls.externalLinkArrow2} />
              </ActivityTableCell>
            </ActivityTableRow>
            <ActivityTableRow>
              <ActivityTableCell>
                <ActivityType>
                  <ActivityTypeIcon src={theme.urls.activityIcon4} />
                  <ActivityTypeTypo>Staking</ActivityTypeTypo>
                </ActivityType>
              </ActivityTableCell>
              <ActivityTableCell>
                <ItemWrapper>
                  <ItemImageWrapper>
                    <ItemImage />
                  </ItemImageWrapper>
                  <ItemInfoWrapper>
                    <ItemNameTypo>Beetle Sword</ItemNameTypo>
                    <ItemIdTypo># 26598</ItemIdTypo>
                  </ItemInfoWrapper>
                </ItemWrapper>
              </ActivityTableCell>
              <ActivityTableCell>---</ActivityTableCell>
              <ActivityTableCell>
                <ActivityFromTypo>0xEbf03...7f0d</ActivityFromTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityToTypo>0xEbf03...7f0d</ActivityToTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <ActivityTimeTypo>42 minutes ago</ActivityTimeTypo>
              </ActivityTableCell>
              <ActivityTableCell>
                <TxLinkIcon src={theme.urls.externalLinkArrow2} />
              </ActivityTableCell>
            </ActivityTableRow>

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((v) => {
              return (
                <ActivityTableRow key={v}>
                  <ActivityTableCell>
                    <ActivityType>
                      <ActivityTypeIcon src={theme.urls.activityIcon1} />
                      <ActivityTypeTypo>Transfer</ActivityTypeTypo>
                    </ActivityType>
                  </ActivityTableCell>
                  <ActivityTableCell>
                    <ItemWrapper>
                      <ItemImageWrapper>
                        <ItemImage />
                      </ItemImageWrapper>
                      <ItemInfoWrapper>
                        <ItemNameTypo>Beetle Sword</ItemNameTypo>
                        <ItemIdTypo># 26598</ItemIdTypo>
                      </ItemInfoWrapper>
                    </ItemWrapper>
                  </ActivityTableCell>
                  <ActivityTableCell>
                    <CurrencyWrapper>
                      <ActivityFCTIcon />
                      <ActivityCurrencyTypo>888888.888888</ActivityCurrencyTypo>
                    </CurrencyWrapper>
                  </ActivityTableCell>
                  <ActivityTableCell>
                    <ActivityFromTypo>0xEbf03...7f0d</ActivityFromTypo>
                  </ActivityTableCell>
                  <ActivityTableCell>
                    <ActivityToTypo>0xEbf03...7f0d</ActivityToTypo>
                  </ActivityTableCell>
                  <ActivityTableCell>
                    <ActivityTimeTypo>42 minutes ago</ActivityTimeTypo>
                  </ActivityTableCell>
                  <ActivityTableCell>
                    <TxLinkIcon src={theme.urls.externalLinkArrow2} />
                  </ActivityTableCell>
                </ActivityTableRow>
              );
            })}
          </ActivityTable>
        </ActivityListWrapper>
      </NftContainer>
    </ContentContainer>
  );
};

export default React.memo(AccountAssets);
