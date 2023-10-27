import styled from 'styled-components';

export const TitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font28};
  font-weight: 500;
  margin-bottom: 20px;
`;

export const TopCard = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.cardDivider};
  background: ${({ theme }) => theme.colors.questBg};
  overflow: hidden;
`;

export const TopLeftWrapper = styled.div`
  width: 437px;
  height: 100%;
  min-width: 437px;
`;

export const PoolImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${({ theme }) => theme.urls.dummyPool}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TopRightWrapper = styled.div`
  width: 100%;
  padding: 40px 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PoolTitle = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 700;
  line-height: 23px;
`;

export const PoolDescription = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 23px;
`;

export const Available = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const AvailableTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 700;
  line-height: 23px;
`;

export const AvailableList = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const StakingInfoWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.cardDivider};
`;

export const InfoWrapper = styled.div<{ $emphasis: boolean }>`
  min-width: 190px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;
  ${({ $emphasis, theme }) => $emphasis && `& > div { color:${theme.colors.buttonThemeBg1}}}`}
`;

export const InfoDivider = styled.div`
  width: 1px;
  margin: 5px 20px;
  background-color: ${({ theme }) => theme.colors.cardDivider};
`;

export const InfoTitleTypo = styled.div`
  color: ${({ theme }) => theme.colors.stakingDesc};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 20px;
`;

export const InfoValueTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font22};
  font-weight: 500;
  line-height: 20px;
`;

export const AvailableItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const AvailableNft = styled.div`
  width: 60px;
  height: 60px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.questDivider};
`;

export const AvailableIcon = styled.div<{ $src: string }>`
  width: 20px;
  height: 20px;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AvailableCurrecyTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  line-height: 23px;
`;

export const NftImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background-image: url('${({ $src }) => $src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
