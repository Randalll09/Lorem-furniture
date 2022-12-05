import React from 'react';
import styled from 'styled-components';
import px2vw from '../../Utils/px2vw';

const Div = styled.div`
  transition: ${({ theme }) => theme.transition};
  margin-bottom: 120px;
  flex: 0.25;
  overflow: hidden;
  position: relative;
  &:hover {
    flex: 0.5;
    .title {
      padding-right: ${px2vw(320)};
    }
  }
  > img {
    height: ${px2vw(640)};
  }
  .title {
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 0px;
    background-color: ${({ theme }) => theme.beige};
    padding-right: 12px;
    transition: ${({ theme }) => theme.transition};
    padding-left: 32px;

    > p {
      font: 300 32px/48px ${({ theme }) => theme.mont};
      z-index: 10;
    }
  }
`;

const CategoryEl = ({ img, category }) => {
  return (
    <Div>
      <img src={img} alt={category} />
      <div className="title white">
        <p>{category}</p>
      </div>
    </Div>
  );
};

export default CategoryEl;
