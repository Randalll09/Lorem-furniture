import React from 'react';
import Category from './Components/Category';
import OnSale from './Components/OnSale';
import Slide from './Components/Slide';

const HomePage = () => {
  return (
    <div>
      <Slide />
      <OnSale />
      <Category />
    </div>
  );
};

export default HomePage;
