import React, { useState } from 'react';
import styled from 'styled-components';
import px2vw from '../Utils/px2vw';
import LoginForm from './Components/LoginForm';
import SignupFrom from './Components/SignupFrom';

const Div = styled.div`
  height: calc(100vh - 90px);
  width: 100vw;
  padding: 120px 0;
  > .inner {
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    height: max-content;
    width: ${px2vw(420)};
    padding: 64px;
    position: absolute;
    transition: ${({ theme }) => theme.transition};
    border: ${({ theme }) => theme.border};
    .form {
      transition: ${({ theme }) => theme.transition};
      margin-left: 6px;
      ul {
        > li {
          position: relative;
          p {
            font: 300 14px/20px ${({ theme }) => theme.mont};
            color: ${({ theme }) => theme.darkMain};
            margin-bottom: 8px;
          }
          span {
            position: absolute;
            font: 300 12px/14px ${({ theme }) => theme.mont};
            color: ${({ theme }) => theme.errorColor};
            bottom: 2px;
          }
          input {
            margin-bottom: 24px;
          }
        }
      }
      button {
        display: block;
        margin: 0 auto;
        margin-top: 24px;
      }
    }
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 48px;
  font: 400 24px/48px ${({ theme }) => theme.mont};
  transition: ${({ theme }) => theme.transition};
  position: relative;
  width: fit-content;
  margin: auto;
  margin-bottom: 36px;
  > li {
    cursor: pointer;
    width: 120px;
    text-align: center;
    position: relative;
    z-index: 10;
    color: ${({ theme }) => theme.txt};
    transition: ${({ theme }) => theme.transition};
    &.selected {
      color: ${({ theme }) => theme.beige};
    }
  }
  &::before {
    transition: ${({ theme }) => theme.transition};
    display: block;
    content: '';
    position: absolute;
    width: 120px;
    height: 48px;
    background-color: ${({ theme }) => theme.main};
    left: ${({ select }) => (select == 0 ? 0 : 168)}px;
  }
`;

const LoginPage = () => {
  const [select, setSelect] = useState(0);
  return (
    <Div>
      <div className="inner">
        <Ul select={select}>
          <li
            className={select == 0 ? 'selected' : null}
            onClick={() => setSelect(0)}
          >
            Log In
          </li>
          <li
            className={select == 1 ? 'selected' : null}
            onClick={() => setSelect(1)}
          >
            Sign Up
          </li>
        </Ul>
        <div className="form">
          {select == 0 ? <LoginForm /> : <SignupFrom />}
        </div>
      </div>
    </Div>
  );
};

export default LoginPage;
