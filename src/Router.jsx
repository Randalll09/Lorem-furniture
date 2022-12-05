import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './Utils/theme';
import HomePage from './Home/HomePage';
import GlobalStyle from './Utils/GlobalStyle';
import PageLayout from './Components/PageLayout';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import AboutPage from './About/AboutPage';
import ShoppingPage from './Shop/ShoppingPage';
import ContactPage from './Contact/ContactPage';
import LoginPage from './Register/LoginPage';

const queryClient = new QueryClient();

const Router = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route exact path="" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/shop" element={<ShoppingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default Router;
