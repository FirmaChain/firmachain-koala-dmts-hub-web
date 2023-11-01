import React from 'react';
import { useSelector } from 'react-redux';

import useTheme from '../../../hooks/useTheme';
import { rootState } from '../../../redux/reducers';

import {
  ProfileContainer,
  ProfileInfo,
  ProfileImageWrapper,
  ProfileImage,
  ProfileNameWrapper,
  ProfileName,
  ProfileNameTypo,
  ProfileEditButton,
  ProfileAddressTypo,
  ShareButton,
} from './styles';
import { createTextEllipsis, stringToSeed } from '../../../utils/common';

const AccountProfile = () => {
  const { theme } = useTheme();
  const { address } = useSelector((state: rootState) => state.wallet);

  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileImageWrapper>
          <ProfileImage />
        </ProfileImageWrapper>
        <ProfileNameWrapper>
          <ProfileName>
            <ProfileNameTypo>Koala #{stringToSeed(address)}</ProfileNameTypo>
            <ProfileEditButton src={theme.urls.editProfile} />
          </ProfileName>
          <ProfileAddressTypo>{createTextEllipsis(address, 8, 9)}</ProfileAddressTypo>
        </ProfileNameWrapper>
        <ShareButton src={theme.urls.share} />
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default React.memo(AccountProfile);
