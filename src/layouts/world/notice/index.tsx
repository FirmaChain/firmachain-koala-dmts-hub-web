import React from 'react';

import Marquee from '../../../components/marquee';

import { NoticeIcon, NoticeTextWrapper, NoticeWrapper } from './styles';

const WorldNotice = () => {
  return (
    <NoticeWrapper>
      <NoticeIcon />
      <NoticeTextWrapper>
        <Marquee
          descriptionList={[
            'The DMTS event dungeon is currently in progress...',
            'The DMTS event dungeon is currently in progress...',
          ]}
        />
      </NoticeTextWrapper>
    </NoticeWrapper>
  );
};

export default React.memo(WorldNotice);
