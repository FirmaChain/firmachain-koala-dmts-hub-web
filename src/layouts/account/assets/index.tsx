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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((v) => (
              <NftItem key={v}>
                <NftImageWrapper>
                  <NftImage />
                </NftImageWrapper>
                <NftInfoWrapper>
                  <NftNameTypo>The beacon</NftNameTypo>
                  <NftIdTypo># 20000</NftIdTypo>
                </NftInfoWrapper>
              </NftItem>
            ))}
          </NftList>
        </NftListWrapper>
      </NftContainer>
    </ContentContainer>
  );
};

export default React.memo(AccountAssets);
