import React from 'react';
import px2vw from '../Utils/px2vw';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  width: ${px2vw(240)};
  height: ${px2vw(120)};
  display: flex;
  gap: ${px2vw(10)};
  position: relative;
  border: ${({ theme }) => theme.border};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  overflow: hidden;
  > .onHover {
    position: absolute;
    top: 0;
    width: ${px2vw(120)};
    height: ${px2vw(120)};
    left: 0;
    transition: ${({ theme }) => theme.transition};
    &::before {
      transition: ${({ theme }) => theme.transition};
      height: ${px2vw(120)};
      width: ${px2vw(120)};
      opacity: 0;
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.beige};
    }
    svg {
      height: auto;
      width: ${px2vw(80)};
      position: absolute;
      left: -100px;
      transition: ${({ theme }) => theme.transition};
      path {
        fill: ${({ theme }) => theme.main};
      }
    }
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.main};
    > .onHover {
      left: 0;
      opacity: 1;
      &::before {
        opacity: 0.4;
      }
      svg {
        left: 20px;
        opacity: 1;
      }
    }
  }
  > img {
    width: ${px2vw(120)};
    height: ${px2vw(120)};
  }
  > div {
    width: ${px2vw(100)};
    padding: 12px;
    > p {
      font: 600 18px/24px ${({ theme }) => theme.mont};
      color: ${({ theme }) => theme.txt};
      text-align: right;
      width: 100%;
    }
    > div {
      position: absolute;
      bottom: 4px;
      left: ${px2vw(140)};
      > p {
        text-align: right;
      }
      &.onSale {
        > span {
          font: 300 14px/20px ${({ theme }) => theme.mont};
          text-decoration: line-through;
          color: #707070;
        }
        > p {
          font: 600 18px/26px ${({ theme }) => theme.mont};
          color: ${({ theme }) => theme.main};
        }
      }
    }
  }
`;

const Item = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Div onClick={() => navigate(`/shop/item/${data.id}`)}>
      <img src={data.src} />
      <div className="onHover">
        <svg viewBox="0 0 512 512">
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
        </svg>
      </div>
      <div>
        <p>{data.name}</p>

        {data.sale ? (
          <div className="onSale">
            <span>{data.price} $</span>
            <p>{parseInt((100 - data.sale) * (data.price / 100))} $</p>
          </div>
        ) : (
          <div className="price">
            <p>{data.price} $</p>
          </div>
        )}
      </div>
    </Div>
  );
};

export default Item;
