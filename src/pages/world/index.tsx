import React, { useState } from 'react';

import useTheme from '../../hooks/useTheme';

import Notice from '../../layouts/world/notice';
import Canvas from '../../layouts/world/canvas';
import CanvasStage from '../../layouts/world/canvasStage';
import RightStage from '../../layouts/world/rightStage';

import { BottomBg, WaveBg1, WaveBg2, WorldContainer, WorldLogo } from '../../styles/world';

const World = () => {
  const { theme } = useTheme();
  const [activeRight, setActiveRight] = useState(false);

  return (
    <WorldContainer>
      <WaveBg1 />
      <WaveBg2 />
      <BottomBg />
      <Notice />
      <Canvas />
      <CanvasStage setActiveRight={setActiveRight} />
      <RightStage activeRight={activeRight} setActiveRight={setActiveRight} />
      <WorldLogo src={theme.urls.worldLogo} />
    </WorldContainer>
  );
};

export default React.memo(World);
