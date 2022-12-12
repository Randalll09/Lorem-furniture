import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { cartState } from '../Utils/recoilState';
import { motion } from 'framer-motion';
import { toLeft } from '../Utils/framer';

const Div = styled(motion.div)`
  position: absolute;
  top: 92px;
  width: 480px;
  height: 100vh;
  right: 0;
  background-color: ${({ theme }) => theme.beige};
`;

const Cart = ({ setOpen }) => {
  const items = useRecoilValue(cartState);

  return (
    <Div variants={toLeft} initial="hidden" animate="show" exit="hidden"></Div>
  );
};

export default Cart;
