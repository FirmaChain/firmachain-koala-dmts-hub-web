import React, { useEffect, useRef } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

interface ICanvasImage {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  originWidth: number;
  originHeight: number;
  dimensions: { width: number; height: number };
  maxCanvasWidth: number;
  maxCanvasHeight: number;
  animateType?: number;
}

const CanvasImage = ({
  src,
  x,
  y,
  width,
  height,
  originWidth,
  originHeight,
  dimensions,
  maxCanvasWidth,
  maxCanvasHeight,
  animateType = 0,
}: ICanvasImage) => {
  const [image] = useImage(src);
  const imageRef = useRef(null);

  const scaledWidth = width * (dimensions.width / maxCanvasWidth);
  const scaledHeight = height * (dimensions.height / maxCanvasHeight);
  const scaledX = x * (dimensions.width / maxCanvasWidth);
  const scaledY = y * (dimensions.height / maxCanvasHeight);

  const scale = {
    x: scaledWidth / originWidth,
    y: scaledHeight / originHeight,
  };

  const bounceDistance = 12 * (dimensions.height / maxCanvasHeight);
  const bounceSpeed = 1 * (dimensions.height / maxCanvasHeight);

  useEffect(() => {
    let animationId: any;
    const node = imageRef.current;

    if (!node) return;

    if (animateType === 1) {
      const animateRotation = () => {
        if (!node.getLayer()) return;

        node.rotate(1);
        node.getLayer().batchDraw();
        animationId = requestAnimationFrame(animateRotation);
      };

      animateRotation();
    } else if (animateType === 2) {
      let upwards = true;
      const minY = scaledY - bounceDistance;
      const maxY = scaledY + bounceDistance;

      const animateBounce = () => {
        if (!node.getLayer()) return;

        const currentY = node.y();

        if (upwards) {
          node.y(currentY - bounceSpeed);
          if (currentY <= minY) {
            upwards = false;
          }
        } else {
          node.y(currentY + bounceSpeed);
          if (currentY >= maxY) {
            upwards = true;
          }
        }

        node.getLayer().batchDraw();
        animationId = requestAnimationFrame(animateBounce);
      };

      animateBounce();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [animateType, scaledY]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Image
      ref={imageRef}
      image={image}
      scale={scale}
      x={scaledX}
      y={scaledY}
      offsetX={animateType === 1 ? originWidth / 2 : 0}
      offsetY={animateType === 1 ? originHeight / 2 : 0}
    />
  );
};

export default React.memo(CanvasImage);
