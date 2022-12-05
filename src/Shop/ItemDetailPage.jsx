import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../Utils/Product.json';

const Div = styled.div``;

const ItemDetailPage = () => {
  const params = useParams();
  console.log(parseInt(params.id));
  // const itemData = Product[params.id - 1];

  return (
    <Div>
      <div></div>
    </Div>
  );
};

export default ItemDetailPage;
