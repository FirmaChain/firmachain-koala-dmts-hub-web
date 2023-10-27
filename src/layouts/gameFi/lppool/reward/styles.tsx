import { ReactSVG } from 'react-svg';
import { styled } from 'styled-components';

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 30px;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StakingTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font38};
  font-weight: 700;
  letter-spacing: -0.76px;
`;

export const StakingDescription = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
`;

export const BorderLine = styled(ReactSVG)`
  width: 160px;
  overflow: hidden;
  & > div {
    width: 374px;
    height: 3px;
    display: flex;
  }
  svg {
    rect {
      fill: ${({ theme }) => theme.colors.textPrimary};
    }
    width: 374px;
    height: 3px;
  }

  margin-top: 5px;
  margin-bottom: 15px;
`;

export const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
`;

export const BalanceWrapper = styled.div`
  width: 100%;
  padding: 0 34px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 34px;
  border-right: 2px solid ${({ theme }) => theme.colors.cardDivider};
`;

export const BalanceDivider = styled.div`
  width: 2px;
  background-color: ${({ theme }) => theme.colors.cardDivider2};
`;

export const TokenBalance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NftBalance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Amount = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  &:nth-child(1) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.cardDivider2};
  }

  &:nth-child(2) > div:nth-child(2) {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const AmountLabel = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const AmountValue = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font20};
  font-weight: 600;
`;

export const RewardWrapper = styled.div`
  width: 320px;
  min-width: 320px;
  padding: 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Reward = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const RewardLabel = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const RewardValueList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const RewardValueItem = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
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
  width: 100%;
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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RecieveButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.buttonThemeBorder1};
  background: ${({ theme }) => theme.colors.buttonThemeBg1};

  color: ${({ theme }) => theme.colors.buttonThemeText1};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;

export const LiquidityButton = styled.div`
  width: 100%;
  max-width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.buttonBorder};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;
