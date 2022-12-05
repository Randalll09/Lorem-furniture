import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Div = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  > div {
    padding-bottom: 200px;
    position: relative;
    margin-top: 90px;
  }
`;

const PageLayout = () => {
  return (
    <>
      <Div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </Div>
    </>
  );
};

export default PageLayout;
