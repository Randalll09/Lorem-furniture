import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import px2vw from '../Utils/px2vw';
import LoreMLogo from './LoreMLogo';

const Head = styled.header`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.beige};
  height: 92px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.txt};
  h1 {
    font: 400 24px/92px ${({ theme }) => theme.mont};
    color: ${({ theme }) => theme.main};
  }
  padding: 0 ${({ theme }) => theme.left};
  > ul {
    display: flex;
    gap: ${px2vw(48)};
    font: 400 14px/28px ${({ theme }) => theme.mont};
    margin-top: 32px;
  }
`;

const Header = () => {
  return (
    <Head>
      <Link to="/">
        <LoreMLogo height={92} />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Head>
  );
};

export default Header;
