import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './Components/LoginForm';
import SignupFrom from './Components/SignupFrom';

const Div = styled.div``;
const Ul = styled.ul``;

const LoginPage = () => {
  const [select, setSelect] = useState(0);
  return (
    <Div>
      <div className="inner">
        <Ul select={select}>
          <li onClick={() => setSelect(0)}>Log In</li>
          <li onClick={() => setSelect(1)}>Sign Up</li>
        </Ul>
        {select == 0 ? <LoginForm /> : <SignupFrom />}
      </div>
    </Div>
  );
};

export default LoginPage;
