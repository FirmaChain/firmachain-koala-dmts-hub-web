import styled from 'styled-components';

export const RewardCard = styled.div`
  width: 400px;
  min-width: 400px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
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

export const RewardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RewardValueList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const RewardValueItem = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ValueIcon = styled.div<{ $src: string }>`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ValueTypo = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.colors.buttonBorder};
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
`;

export const ValueCurrency = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font18};
  font-weight: 500;
`;

export const RecieveButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;

  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.buttonThemeBorder1};
  background: ${({ theme }) => theme.colors.buttonThemeBg1};

  color: ${({ theme }) => theme.colors.buttonThemeText1};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;
