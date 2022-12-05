import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${({ theme }) => theme.beige};
  color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  font: 400 16px/24px ${({ theme }) => theme.mont};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border: 1px solid ${({ theme }) => theme.main};
  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.beige};
  }
  &:disabled {
    background-color: #e0e0e0;
    border: 1px solid #e0e0e0;
    color: #707070;
    cursor: default;
    &:hover {
      color: #707070;
      background-color: #e0e0e0;
    }
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
