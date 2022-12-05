import styled from 'styled-components';
import React from 'react';

const Title = styled.h1`
  font: 600 32px/48px ${({ theme }) => theme.mont};
  color: ${({ theme }) => theme.main};
  letter-spacing: 1.2px;
`;

export default Title;
