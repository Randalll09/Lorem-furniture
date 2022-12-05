import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
import ItemDetailPage from './Shop/ItemDetailPage';

const queryClient = new QueryClient();

const Router = () => {
  return (
    <HashRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route exact path="" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/shop" element={<ShoppingPage />} />
                <Route path="/shop/item/:id" element={<ItemDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </HashRouter>
  );
};

export default Router;
