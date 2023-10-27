import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const TopWrapper = styled.div`
  width: 100%;
  height: 240px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
`;

export const LeftWrapper = styled.div`
  height: 100%;
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
`;

export const RightWrapper = styled.div`
  height: 100%;
  flex: 1 0 0;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StakingTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font38};
  font-weight: 700;
  letter-spacing: -0.76px;
`;

export const BorderLine = styled(ReactSVG)`
  width: 163px;
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

export const StakingDescription = styled.div`
  width: 100%;
  max-width: 330px;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 22px;
`;

export const Reward = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RewardLabel = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const RewardValueList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const RewardValueItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 10px;
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
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
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
  align-items: center;
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

export const BalanceWrapper = styled.div`
  height: 100%;
  padding-left: 20px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 2px solid #e9e9e9;
  border-left: 2px solid #e9e9e9;
`;

export const RewardWrapper = styled.div`
  height: 100%;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Balance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
`;

export const BalanceLabel = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const BalanceValueList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const BalanceValueItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BalanceValueIcon = styled.div<{ $src: string }>`
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BalanceValueTypo = styled.div`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  display: flex;
  align-items: center;
`;
