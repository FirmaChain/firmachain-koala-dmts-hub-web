import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';

import useImageData from '../../../hooks/useImageData';

import CanvasSprite from '../../../components/canvasSprite';
import CanvasImage from '../../../components/canvasImage';

import { CanvasWrapper } from './styles';

const WorldCanvas = () => {
  const maxCanvasWidth = 1600;
  const maxCanvasHeight = 897;

  const { spriteList, imageList, mainBg } = useImageData();

  const [dimensions, setDimensions] = useState({ width: maxCanvasWidth, height: maxCanvasHeight });

  useEffect(() => {
    const updateSize = () => {
      let newWidth = 0;
      let newHeight = 0;

      const windowWidth = window.innerWidth - 70;
      const windowHeight = window.innerHeight - 66;
      const widthRatio = windowWidth / maxCanvasWidth;
      const heightRatio = windowHeight / maxCanvasHeight;

      if (widthRatio < heightRatio) {
        newWidth = Math.min(maxCanvasWidth, maxCanvasWidth * widthRatio);
        newHeight = Math.min(maxCanvasHeight, maxCanvasHeight * widthRatio);
      } else {
        newWidth = Math.min(maxCanvasWidth, maxCanvasWidth * heightRatio);
        newHeight = Math.min(maxCanvasHeight, maxCanvasHeight * heightRatio);
      }

      setDimensions({ width: newWidth, height: newHeight });
    };

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <CanvasWrapper>
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          <Image image={mainBg} width={dimensions.width} height={dimensions.height} />
          {spriteList.map((spriteData, index) => (
            <CanvasSprite
              key={index}
              src={spriteData.src}
              x={spriteData.x}
              y={spriteData.y}
              frame={spriteData.frame}
              width={spriteData.width}
              height={spriteData.height}
              originWidth={spriteData.originWidth}
              originHeight={spriteData.originHeight}
              dimensions={dimensions}
              maxCanvasWidth={maxCanvasWidth}
              maxCanvasHeight={maxCanvasHeight}
            />
          ))}
          {imageList.map((imageData, index) => (
            <CanvasImage
              key={index}
              src={imageData.src}
              x={imageData.x}
              y={imageData.y}
              width={imageData.width}
              height={imageData.height}
              originWidth={imageData.originWidth}
              originHeight={imageData.originHeight}
              dimensions={dimensions}
              maxCanvasWidth={maxCanvasWidth}
              maxCanvasHeight={maxCanvasHeight}
              animateType={imageData.animateType}
            />
          ))}
        </Layer>
      </Stage>
    </CanvasWrapper>
  );
};

export default React.memo(WorldCanvas);
