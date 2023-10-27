import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useScreen from '../../hooks/useScreen';

const StyledBurger = styled.button<{ open: boolean; color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 26px;
  height: 26px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-top: -1px;

  &:focus {
    outline: none;
  }

  div {
    width: 26px;
    height: 3px;
    background: ${({ color }) => color};
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Line = styled.div``;

interface IBurger {
  color: string;
}

const Burger = ({ color }: IBurger) => {
  const { collapsedNavMobile, expandedNavMobile } = useScreen();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) collapsedNavMobile();
    else expandedNavMobile();
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledBurger open={open} color={color} onClick={() => setOpen(!open)}>
      <Line />
      <Line />
      <Line />
    </StyledBurger>
  );
};

export default React.memo(Burger);
