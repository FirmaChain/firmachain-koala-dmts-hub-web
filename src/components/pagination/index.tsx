import React from 'react';

import { PaginationContainer, PageNumber } from './styles';

interface IPagination {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }: IPagination) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > pageCount) return;
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <PageNumber key={i} $active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </PageNumber>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <PageNumber $active={false} onClick={() => handlePageChange(1)}>
        〈〈
      </PageNumber>
      <PageNumber $active={false} onClick={() => handlePageChange(currentPage - 1)}>
        〈
      </PageNumber>
      {renderPageNumbers()}
      <PageNumber $active={false} onClick={() => handlePageChange(currentPage + 1)}>
        〉
      </PageNumber>
      <PageNumber $active={false} onClick={() => handlePageChange(pageCount)}>
        〉〉
      </PageNumber>
    </PaginationContainer>
  );
};

export default React.memo(Pagination);
