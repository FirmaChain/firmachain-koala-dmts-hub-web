import React, { useState } from 'react';

import useTheme from '../../../hooks/useTheme';
import useCustomNavigate from '../../../hooks/useCustomNavigate';

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
  SearchInputWrapper,
  SearchIcon,
  SearchInput,
  ResultTypo,
  SortWrapper,
  SortSelect,
  SortOption,
  RightWrapper,
  NftListWrapper,
  NftList,
  NftItem,
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
  NftImageWrapper,
  NftImage,
  NftInfoWrapper,
  NftNameTypo,
  NftIdTypo,
  NftPriceWrapper,
  FCTIcon,
  FCTPriceTypo,
} from './styles';

const MarketplaceList = () => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  const [isChekced, setChecked] = useState(false);
  const [expended, setExpended] = useState(true);

  const nftList = [
    theme.urls.dummyChar00,
    theme.urls.dummyChar01,
    theme.urls.dummyChar02,
    theme.urls.dummyChar03,
    theme.urls.dummyChar04,
    theme.urls.dummyChar05,
    theme.urls.dummyChar06,
    theme.urls.dummyChar07,
    theme.urls.dummyChar08,
    theme.urls.dummyChar09,
    theme.urls.dummyChar10,
    theme.urls.dummyChar11,
    theme.urls.dummyChar12,
    theme.urls.dummyChar13,
    theme.urls.dummyChar14,
  ];

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
            <SearchInputWrapper>
              <SearchIcon src={theme.urls.search} />
              <SearchInput placeholder='Search by name or trait' />
            </SearchInputWrapper>

            <RightWrapper>
              <ResultTypo>100 Results</ResultTypo>
              <SortWrapper>
                <SortSelect>
                  <SortOption>Recent</SortOption>
                </SortSelect>
              </SortWrapper>
            </RightWrapper>
          </NftTitle>
        </NftTitleContainer>
        <NftListWrapper>
          <NftList $expended={expended}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((v) => (
              <NftItem key={v} onClick={() => navigate('/nfts/1')}>
                <NftImageWrapper>
                  <NftImage $src={nftList[v]} />
                </NftImageWrapper>
                <NftInfoWrapper>
                  <NftNameTypo>The beacon</NftNameTypo>
                  <NftIdTypo># 20000</NftIdTypo>
                </NftInfoWrapper>
                <NftPriceWrapper>
                  <FCTIcon />
                  <FCTPriceTypo>5.0 FCT</FCTPriceTypo>
                </NftPriceWrapper>
              </NftItem>
            ))}
          </NftList>
        </NftListWrapper>
      </NftContainer>
    </ContentContainer>
  );
};

export default React.memo(MarketplaceList);
