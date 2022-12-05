import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font: 400 24px / ${({ height }) => (height ? height : 32)}px
    ${({ theme }) => theme.mont};
  color: ${({ theme }) => theme.main};
  letter-spacing: 1.32px;
`;
const LoreMLogo = ({ height }) => {
  return <P height={height}>LoreM</P>;
};

export default LoreMLogo;
