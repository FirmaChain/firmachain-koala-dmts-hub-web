import React, { useEffect, useRef } from 'react';
import { Sprite } from 'react-konva';
import useImage from 'use-image';

interface ICanvasSprite {
  src: string;
  x: number;
  y: number;
  frame: number;
  width: number;
  height: number;
  originWidth: number;
  originHeight: number;
  dimensions: { width: number; height: number };
  maxCanvasWidth: number;
  maxCanvasHeight: number;
}

const CanvasSprite = ({
  src,
  x,
  y,
  frame,
  width,
  height,
  originWidth,
  originHeight,
  dimensions,
  maxCanvasWidth,
  maxCanvasHeight,
}: ICanvasSprite) => {
  const [image] = useImage(src);
  const spriteRef = useRef<any>();

  useEffect(() => {
    spriteRef.current?.start();
  }, [image]);

  const scaledWidth = width * (dimensions.width / maxCanvasWidth);
  const scaledHeight = height * (dimensions.height / maxCanvasHeight);
  const scaledX = x * (dimensions.width / maxCanvasWidth);
  const scaledY = y * (dimensions.height / maxCanvasHeight);

  const scale = {
    x: scaledWidth / originWidth,
    y: scaledHeight / originHeight,
  };

  const animations = { idle: [] };
  for (let i = 0; i < frame; i++) {
    animations.idle.push(i * originWidth);
    animations.idle.push(0);
    animations.idle.push(originWidth);
    animations.idle.push(originHeight);
  }

  return (
    <Sprite
      ref={spriteRef}
      image={image}
      frameRate={frame}
      frameIndex={0}
      animation='idle'
      animations={animations}
      scale={scale}
      x={scaledX}
      y={scaledY}
    />
  );
};

export default React.memo(CanvasSprite);
