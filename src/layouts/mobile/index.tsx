import React from 'react';

import useTheme from '../../hooks/useTheme';
import { CHAIN_CONFIG } from '../../config';

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
  MobileGuideContainer,
  PoweredByValueTypo,
  PoweredByWrapper,
  TopWrapper,
  WorldBg,
} from './styles';

const MobileGuideLine = () => {
  const { theme } = useTheme();

  const onClickLanding = () => {
    window.location.href = CHAIN_CONFIG.LANDING;
  };

  return (
    <MobileGuideContainer>
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
        <GuideTypo>Optimized for Larger Displays</GuideTypo>
        <GuideSubTypo>Please use a higher resolution for the best experience during this event demo.</GuideSubTypo>
        <LandingButton onClick={() => onClickLanding()}>Official site</LandingButton>
        <ContactTypo
          onClick={() => {
            window.location.href = 'mailto:contact@firmachain.org';
          }}
        >
          contact us
        </ContactTypo>
      </GuideWrapper>
    </MobileGuideContainer>
  );
};

export default React.memo(MobileGuideLine);
