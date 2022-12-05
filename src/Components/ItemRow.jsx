import React from 'react';
import styled from 'styled-components';
import px2vw from '../Utils/px2vw';
import Item from './Item';

const Ul = styled.ul`
  margin: 24px 0;
  display: flex;
  gap: ${px2vw(20)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
`;

const ItemRow = ({ data, wrap }) => {
  return (
    <Ul wrap={wrap}>
      {data.map((val) => (
        <Item data={val} key={val.id} />
      ))}
    </Ul>
  );
};

export default ItemRow;
