import React from 'react';

import styled from 'styled-components';

const StageCardBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StageCardBgVector1 = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  position: absolute;
  left: 0;
  top: 0;
  background: url('${({ theme }) => theme.urls.worldStageCardBg1}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const StageCardBgVector2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background-image: url('${({ theme }) => theme.urls.worldStageCardBg2}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const CardBg = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <StageCardBg>
      <StageCardBgVector1 />
      <StageCardBgVector2 />
    </StageCardBg>
  );
};

export default React.memo(CardBg);
