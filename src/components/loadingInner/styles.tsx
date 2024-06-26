import styled from 'styled-components';

export const DimmedLayer = styled.div<{ $isLoading: boolean }>`
  display: ${({ $isLoading }) => ($isLoading ? 'block' : 'none')};
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SpinnerImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar1}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoadingTypo = styled.div`
  color: white;
  font-size: ${({ theme }) => theme.sizes.font24};
  font-weight: 600;
`;
