import React from 'react';
import styled from 'styled-components';
import LoreMLogo from './LoreMLogo';
import { Link } from 'react-router-dom';
import px2vw from '../Utils/px2vw';

const Foot = styled.footer`
  width: 100vw;
  position: absolute;
  bottom: 0;
  padding: 30px ${({ theme }) => theme.left};
  height: 200px;
  background-color: ${({ theme }) => theme.beige};
  border-top: 1px solid ${({ theme }) => theme.txt};
  > div {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      gap: ${px2vw(32)};
      font: 400 16px/24px ${({ theme }) => theme.mont};
      color: ${({ theme }) => theme.main};
    }
    address {
      margin-top: 64px;
      font: 300 12px/18px ${({ theme }) => theme.mont};
      letter-spacing: -0.3px;
    }
    > .logo {
      > p:nth-of-type(1) {
        margin-bottom: 32px;
      }
      > p:not(:nth-of-type(1)) {
        font: 300 12px/18px ${({ theme }) => theme.mont};
        letter-spacing: -0.3px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Foot>
      <div>
        <div>
          <ul className="menu">
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
          </ul>
          <address>
            Tel.1544-2222
            <br />
            Adr.Seoul Nocheondong 11-234
          </address>
        </div>
        <div className="logo">
          <LoreMLogo />
          <p>©2022 Na Hyejin</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
