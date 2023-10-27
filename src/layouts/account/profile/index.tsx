import React from 'react';

import useTheme from '../../../hooks/useTheme';

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

const AccountProfile = () => {
  const { theme } = useTheme();

  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileImageWrapper>
          <ProfileImage />
        </ProfileImageWrapper>
        <ProfileNameWrapper>
          <ProfileName>
            <ProfileNameTypo>Unnamed</ProfileNameTypo>
            <ProfileEditButton src={theme.urls.editProfile} />
          </ProfileName>
          <ProfileAddressTypo>{'firma1p90...qz0pccc'}</ProfileAddressTypo>
        </ProfileNameWrapper>
        <ShareButton src={theme.urls.share} />
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default React.memo(AccountProfile);
