import { styled } from '@tanstack/react-query-devtools/build/lib/utils';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState } from '../Utils/recoilState';

const Div = styled.div``;

const Cart = () => {
  const items = useRecoilValue(cartState);

  return <Div></Div>;
};

export default Cart;
