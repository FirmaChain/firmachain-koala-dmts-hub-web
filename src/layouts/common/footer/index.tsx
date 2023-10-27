import React from 'react';

import useTheme from '../../../hooks/useTheme';

import { MEDIUM, REDDIT, TELEGRAM, TWITTER } from '../../../constant/common';

import {
  FooterContainer,
  FooterWrapper,
  FooterProject,
  ProjectLogoWrapper,
  Logo1Image,
  Logo2Image,
  ProjectTop,
  ProjectDescriptionTypo,
  ProjectPolicy,
  PolicyTypo,
  PolicyDivider,
  ProjectBottom,
  CopyrightTypo,
  FooterContactUs,
  ContactUsTypo,
  ContactList,
  ContactItem,
} from './styles';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterProject>
          <ProjectTop>
            <ProjectLogoWrapper>
              <Logo1Image src={theme.urls.footerLogo1} />
              <Logo2Image src={theme.urls.footerLogo2} />
            </ProjectLogoWrapper>
            {/* <ProjectNameTypo>KOALA KNIGHT</ProjectNameTypo> */}
            <ProjectDescriptionTypo>
              The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
              Buy, sell, and discover exclusive digital items.
            </ProjectDescriptionTypo>
            <ProjectPolicy>
              <PolicyTypo>Terms and conditions</PolicyTypo>
              <PolicyDivider />
              <PolicyTypo>Privacy policy</PolicyTypo>
            </ProjectPolicy>
          </ProjectTop>
          <ProjectBottom>
            <CopyrightTypo>Copyright 2023 KOALA KNIGHTS. All Rights Reserved.</CopyrightTypo>
          </ProjectBottom>
        </FooterProject>
        <FooterContactUs>
          <ContactUsTypo>CONTACT US</ContactUsTypo>
          <ContactList>
            <ContactItem src={theme.urls['contactMedium']} onClick={() => window.open(MEDIUM)} />
            <ContactItem src={theme.urls['contactReddit']} onClick={() => window.open(REDDIT)} />
            <ContactItem src={theme.urls['contactTelegram']} onClick={() => window.open(TELEGRAM)} />
            <ContactItem src={theme.urls['contactTwitter']} onClick={() => window.open(TWITTER)} />
          </ContactList>
        </FooterContactUs>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer);
