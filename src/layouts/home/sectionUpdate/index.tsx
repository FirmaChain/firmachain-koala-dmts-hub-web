import React from 'react';

import useTheme from '../../../hooks/useTheme';
import useCustomNavigate from '../../../hooks/useCustomNavigate';

import {
  UpdateSectionContainer,
  CardBody,
  CardContainer,
  CardDivider,
  CardHeader,
  CardLabel,
  HeaderTypo,
  ExternalLinkIcon,
  UpdateIcon,
  UpdateList,
  UpdateItem,
  UpdateImage,
  UpdateDescription,
  UpdateTitleWrapper,
  UpdateLabel,
  UpdateTitleTypo,
  DescriptionTypo,
} from './styles';

const SectionEvent = () => {
  const { theme } = useTheme();
  const navigate = useCustomNavigate();

  return (
    <UpdateSectionContainer>
      <CardContainer>
        <CardHeader>
          <CardLabel>
            <UpdateIcon src={theme.urls.updateIcon} />
          </CardLabel>
          <CardDivider />
          <HeaderTypo>UPDATE</HeaderTypo>
          <ExternalLinkIcon src={theme.urls.externalLinkArrow} onClick={() => navigate('/news')} />
        </CardHeader>
        <CardBody>
          <UpdateList>
            <UpdateItem>
              <UpdateImage />
              <UpdateDescription>
                <UpdateTitleWrapper>
                  <UpdateLabel>NEW</UpdateLabel>
                  <UpdateTitleTypo>User Lands Update: Redefining Your Virtual Territories!</UpdateTitleTypo>
                </UpdateTitleWrapper>
                <DescriptionTypo>
                  Hot Off the Press: We've rolled out an exciting update to User Lands! Your virtual territories are
                  about to be transformed. Explore enhanced features, expanded customization options, and exciting new
                  possibilities for your digital domains. It's time to take control and redefine your virtual world!
                </DescriptionTypo>
              </UpdateDescription>
            </UpdateItem>
          </UpdateList>
        </CardBody>
      </CardContainer>
    </UpdateSectionContainer>
  );
};

export default React.memo(SectionEvent);
