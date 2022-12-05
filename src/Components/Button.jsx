import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${({ theme }) => theme.beige};
  color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  font: 400 16px/24px ${({ theme }) => theme.mont};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.beige};
  }
`;

const Button = ({
  onClick = () => {},
  context = '',
  width = 80,
  height = 24,
  disabled = false,
}) => {
  return (
    <Btn onClick={onClick} disabled={disabled} width={width} height={height}>
      {context}
    </Btn>
  );
};

export default Button;
