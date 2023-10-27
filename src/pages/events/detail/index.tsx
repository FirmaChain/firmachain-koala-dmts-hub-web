import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../layouts/common/header';
import EventDetailContainer from '../../../layouts/event/detail';

import { ContentsContainer, ContentWrapper } from '../../../styles/common';

const EventDetail = () => {
  const { eventId } = useParams();

  return (
    <ContentsContainer>
      <Header />
      <ContentWrapper>
        <EventDetailContainer eventId={eventId} />
      </ContentWrapper>
    </ContentsContainer>
  );
};

export default React.memo(EventDetail);
