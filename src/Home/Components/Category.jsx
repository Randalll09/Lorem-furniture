import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Title';
import CategoryEl from './CategoryEl';

const Div = styled.div`
  margin-top: 120px;
  position: relative;
  left: ${({ theme }) => theme.left};
  > div {
    margin-top: 24px;
    display: flex;
    width: ${({ theme }) => theme.pgWidth};
  }
`;

const Category = () => {
  return (
    <Div>
      <Title>Categories</Title>
      <div>
        <CategoryEl category="bed" img={'/assets/img/bed4.jpg'} />
        <CategoryEl category="desk" img={'/assets/img/desk2.jpg'} />
        <CategoryEl category="sofa" img={'/assets/img/sofa4.jpg'} />
        <CategoryEl category="table" img={'/assets/img/table7.jpg'} />
      </div>
    </Div>
  );
};

export default Category;
