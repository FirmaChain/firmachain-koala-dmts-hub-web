import React from 'react';

import useTheme from '../../../hooks/useTheme';

import {
  CardContainer,
  CardHeader,
  CardLabel,
  UpdateIcon,
  HeaderTypo,
  CardDivider,
  CardBody,
  UpdateList,
  UpdateItem,
  UpdateImage,
  UpdateDescription,
  UpdateTitleWrapper,
  UpdateLabel,
  UpdateTitleTypo,
  DescriptionTypo,
  // ExternalLinkIcon,
} from './styles';

const UpdateNews = () => {
  const { theme } = useTheme();

  return (
    <CardContainer>
      <CardHeader>
        <CardLabel>
          <UpdateIcon src={theme.urls.updateIcon} />
        </CardLabel>
        <CardDivider />
        <HeaderTypo>RECENT UPDATE</HeaderTypo>
        {/* <ExternalLinkIcon src={theme.urls.externalLinkArrow} /> */}
      </CardHeader>
      <CardBody>
        <UpdateList>
          <UpdateItem>
            <UpdateImage $src={theme.urls.dummyNewsBanner3} />
            <UpdateDescription>
              <UpdateTitleWrapper>
                <UpdateLabel>NEW</UpdateLabel>
                <UpdateTitleTypo>User Lands Update: Redefining Your Virtual Territories!</UpdateTitleTypo>
              </UpdateTitleWrapper>
              <DescriptionTypo>
                Hot Off the Press: We've rolled out an exciting update to User Lands! Your virtual territories are about
                to be transformed...
              </DescriptionTypo>
            </UpdateDescription>
          </UpdateItem>

          <UpdateItem>
            <UpdateImage $src={theme.urls.dummyNewsBanner4} />
            <UpdateDescription>
              <UpdateTitleWrapper>
                <UpdateTitleTypo>Scenario Chapter 1 Unveiled: Dive into the Adventure!</UpdateTitleTypo>
              </UpdateTitleWrapper>
              <DescriptionTypo>
                Breaking News: We are thrilled to unveil the first chapter of our scenario storyline! Get ready...
              </DescriptionTypo>
            </UpdateDescription>
          </UpdateItem>

          <UpdateItem>
            <UpdateImage $src={theme.urls.dummyNewsBanner5} />
            <UpdateDescription>
              <UpdateTitleWrapper>
                <UpdateTitleTypo>Worldwide Launch: Welcome to the World of Koala Knights!</UpdateTitleTypo>
              </UpdateTitleWrapper>
              <DescriptionTypo>
                News Flash: We are excited to announce the worldwide launch of the Koala Knights world! Step into...
              </DescriptionTypo>
            </UpdateDescription>
          </UpdateItem>
        </UpdateList>
      </CardBody>
    </CardContainer>
  );
};

export default React.memo(UpdateNews);
