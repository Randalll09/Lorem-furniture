import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../Utils/Product.json';

const Div = styled.div``;

const ItemDetailPage = () => {
  const params = useParams();
  const itemData = Product[parseInt(params.id) - 1];

  return (
    <Div>
      <div>
        <img src={itemData.src} alt={itemData.name} />
        <div></div>
      </div>
    </Div>
  );
};

export default ItemDetailPage;
