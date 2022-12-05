import React, { useState } from 'react';
import styled from 'styled-components';
import Item from '../../Components/Item';
import ItemRow from '../../Components/ItemRow';
import Title from '../../Components/Title';
import Product from '../../Utils/Product.json';

const Div = styled.div`
  margin-top: 120px;
  width: ${({ theme }) => theme.pgWidth};
  height: fit-content;
  position: relative;
  left: ${({ theme }) => theme.left};

  > p {
    position: absolute;
    right: 0;
    top: 36px;
    font: 400 16px/30px ${({ theme }) => theme.mont};
    color: ${({ theme }) => theme.txt};
    cursor: pointer;
  }
  > ul {
  }
`;

const OnSale = () => {
  return (
    <Div>
      <Title>On Sale</Title>
      <p>See More...</p>
      <ItemRow data={Product.filter((el) => el.sale).slice(0, 5)} />
    </Div>
  );
};

export default OnSale;
