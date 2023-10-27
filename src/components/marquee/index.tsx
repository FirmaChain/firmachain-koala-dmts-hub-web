import React, { useMemo } from 'react';

import { MarqueeContainer, MarqueeContent, Typo } from './styles';

interface IMarquee {
  descriptionList: string[];
}

const Marquee = ({ descriptionList }: IMarquee) => {
  const totalDescListWidth = useMemo(() => {
    return descriptionList.reduce((total: any, description: any) => total + description.length, 0);
  }, [descriptionList]);

  const duration = totalDescListWidth * 0.2;

  return (
    <MarqueeContainer>
      <MarqueeContent $duration={duration}>
        {[...descriptionList, ...descriptionList].map((description, index) => (
          <Typo key={index}>{description}</Typo>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default React.memo(Marquee);
