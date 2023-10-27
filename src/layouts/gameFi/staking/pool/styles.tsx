import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 0 10px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LabelIcon = styled(ReactSVG)`
  height: 26px;
  svg {
    width: 14px;
    height: 26px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const TitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 700;
`;

export const PoolContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PoolList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PoolItem = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.white};
`;

export const PoolTopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PoolImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 260px;
  border-radius: 5px;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PoolBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PoolTitle = styled.div`
  width: 100%;
  padding: 24px 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardDivider2};
`;

export const PoolTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 700;
`;

export const PoolInfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 20px 30px 30px 30px;
`;

export const PoolInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(1) > div:nth-child(2) {
    color: ${({ theme }) => theme.colors.stakingAPR};
  }
`;

export const PoolInfoLabel = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

export const PoolInfoValue = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  line-height: 20px;
`;

export const StakingButtonWrapper = styled.div`
  width: 100%;
  padding: 0 30px 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StakingButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.buttonThemeBorder2};
  background: ${({ theme }) => theme.colors.buttonThemeBg2};

  color: ${({ theme }) => theme.colors.buttonThemeText2};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
`;
