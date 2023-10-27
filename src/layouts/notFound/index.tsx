import React from 'react';

import useTheme from '../../hooks/useTheme';
import useCustomNavigate from '../../hooks/useCustomNavigate';

import {
  Character1,
  Character2,
  Character3,
  ChracterWrapper,
  ContactTypo,
  FCTLogo,
  GuideSubTypo,
  GuideTypo,
  GuideWrapper,
  LandingButton,
  LogoImage,
  NotFoundContainer,
  PoweredByValueTypo,
  PoweredByWrapper,
  TopWrapper,
  WorldBg,
} from './styles';

const NotFound = () => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  const onClickLanding = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <TopWrapper>
        <FCTLogo src={theme.urls.firmaLogo3} />
        <PoweredByWrapper>
          <PoweredByValueTypo src={theme.urls.firmaLogo2} />
        </PoweredByWrapper>
      </TopWrapper>
      <WorldBg />

      <GuideWrapper>
        <LogoImage src={theme.urls.homeSectionTopLogo} />
        <ChracterWrapper>
          <Character1 />
          <Character2 />
          <Character3 />
        </ChracterWrapper>
        <GuideTypo>404 NOT FOUND</GuideTypo>
        <GuideSubTypo>Oops! Looks like this level doesn't exist.</GuideSubTypo>
        <LandingButton onClick={() => onClickLanding()}>Play Again</LandingButton>
        <ContactTypo
          onClick={() => {
            window.location.href = 'mailto:contact@firmachain.org';
          }}
        >
          contact us
        </ContactTypo>
      </GuideWrapper>
    </NotFoundContainer>
  );
};

export default React.memo(NotFound);
