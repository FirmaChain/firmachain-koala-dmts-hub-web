import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 280px;
  padding: 10px 70px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    background-image: url('${({ theme }) => theme.urls.inventoryBg}');
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;
  position: relative;
`;

export const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  min-width: 150px;
  min-height: 150px;
  max-width: 150px;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 80px;
  border: 3px solid white;
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 100%;

  background-image: url('${({ theme }) => theme.urls.homeSectionTopChar5}');
  background-size: 65%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.accountProfileBg};
`;

export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileNameTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font26};
  font-weight: 600;
`;

export const ProfileEditButton = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 30px;
    height: 30px;
  }
`;

export const ProfileAddressTypo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
`;

export const ShareButton = styled(ReactSVG)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

  width: 30px;
  height: 30px;
  svg {
    fill: ${({ theme }) => theme.colors.textPrimary};
    width: 30px;
    height: 30px;
  }
`;
