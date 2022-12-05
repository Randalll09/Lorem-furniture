import React from 'react';
import styled from 'styled-components';
import px2vw from '../Utils/px2vw';

const Input = styled.input`
  width: ${({ width }) => px2vw(width)};
  height: ${({ height }) => px2vw(height)}px;
  background-color: #fff;
  border: none;
  padding: 0 8px;
  border-bottom: ${(props) =>
    props.wrong
      ? '1px solid' + props.theme.errorColor
      : '1px solid' + props.theme.txt};
  transition: ${({ theme }) => theme.transition};
  font: 400 16px/32px ${({ theme }) => theme.mont};
  color: ${({ theme }) => theme.txt};
  &:focus {
    border-bottom: ${(props) =>
      props.wrong
        ? '1px solid' + props.theme.errorColor
        : '1px solid' + props.theme.main};

    background-color: ${({ theme }) => theme.cream};
  }
`;

export default Input;
