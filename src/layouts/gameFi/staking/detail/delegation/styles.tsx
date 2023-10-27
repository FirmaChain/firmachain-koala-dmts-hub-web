import styled from 'styled-components';

export const MyDelegationCard = styled.div`
  width: 100%;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
`;

export const MyDelegationTopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DelegateNftList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DelegationNftItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const NftImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.questDivider};
`;

export const NftImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NftName = styled.div``;

export const DelegationValueList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DelegationValueItem = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DelegationValueItemMini = styled.div`
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:nth-child(2) {
    font-size: ${({ theme }) => theme.sizes.font20};
  }
`;

export const DelegationValueIcon = styled.div<{ $src: string }>`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DelegationValueTypo = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 600;
`;

export const DelegationValueCurrency = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DelegateButton = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  background: ${({ theme }) => theme.colors.buttonBorder};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;

export const UNDelegateButton = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  background: ${({ theme }) => theme.colors.buttonBorder};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;

export const CardLabel = styled.div`
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};

  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 700;
`;
