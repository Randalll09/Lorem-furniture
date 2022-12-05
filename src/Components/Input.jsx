import React from 'react';
import styled from 'styled-components';

const El = styled.input`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.txt};
  transition: ${({ theme }) => theme.transition};
`;

const Input = (
  value,
  onChange = () => {},
  width = 120,
  height = 32,
  placeholder = ''
) => {
  return (
    <El
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      placeholder={placeholder}
    />
  );
};

export default Input;
