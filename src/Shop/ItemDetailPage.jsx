import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Product from '../Utils/Product.json';
import px2vw from '../Utils/px2vw';
import { loginState } from '../Utils/recoilState';

const Div = styled.div`
  margin-top: 176px;
  width: ${({ theme }) => theme.pgWidth};
  margin-left: ${({ theme }) => theme.left};
  display: flex;
  gap: 30px;
  color: ${({ theme }) => theme.txt};

  > img {
    width: ${px2vw(720)};
  }
  > .info {
    width: 100%;
    position: relative;
    margin-top: 12px;
    > span {
      color: #707070;
      font: 300 14px/20px ${({ theme }) => theme.mont};
      text-align: right;
    }
    > h1 {
      font: 500 48px/64px ${({ theme }) => theme.mont};
      position: relative;
      color: ${({ theme }) => theme.main};
    }
    > .price {
      font: 400 32px/48px ${({ theme }) => theme.mont};
      margin-top: 48px;
      > span {
        font: 300 26px/48px ${({ theme }) => theme.mont};
        text-decoration: line-through;
        text-decoration-color: #707070;
        color: #707070;
      }
    }
    > .bottom {
      position: absolute;
      bottom: 12px;
      gap: 24px;
      > .count {
        display: flex;
        margin-bottom: 24px;

        > button {
          width: 30px;
          height: 30px;
          border: ${({ theme }) => theme.border};
          background-color: ${({ theme }) => theme.cream};
          color: ${({ theme }) => theme.mainDark};
          font: 600 18px ${({ theme }) => theme.mont};
          &:disabled {
            background-color: #e0e0e0;
          }
        }
        > input {
          font: 600 14px ${({ theme }) => theme.mont};
          width: 40px;
          height: 30px;
          text-align: center;
          border-top: ${({ theme }) => theme.border};
          border-bottom: ${({ theme }) => theme.border};
          &::-webkit-inner-spin-button {
            display: none;
          }
        }
      }
      > button {
        width: ${px2vw(480)};
        height: 48px;
        font: 400 24px ${({ theme }) => theme.mont};
        border: 1px solid ${({ theme }) => theme.main};
        color: ${({ theme }) => theme.main};
        background-color: ${({ theme }) => theme.beige};
        transition: ${({ theme }) => theme.transition};
        &:hover {
          background-color: ${({ theme }) => theme.main};
          color: ${({ theme }) => theme.beige};
        }
      }
    }
  }
`;

const ItemDetailPage = () => {
  const params = useParams();
  const loggedIn = useRecoilValue(loginState);
  const itemData = Product[parseInt(params.id) - 1];
  const [num, setNum] = useState(1);
  return (
    <Div>
      <img src={itemData.src} alt={itemData.name} />
      <div className="info">
        <span>{itemData.category[0]}</span>

        <h1>{itemData.name}</h1>
        <div className="price">
          {itemData.sale ? (
            <>
              <span>{itemData.price} $</span>
              <p>
                {parseInt((itemData.price / 100) * (100 - itemData.sale))} $
              </p>
            </>
          ) : (
            <p>{itemData.price} $</p>
          )}
        </div>
        <div className="bottom">
          <div className="count">
            <button
              disabled={num <= 1}
              onClick={() => setNum((prev) => --prev)}
            >
              -
            </button>
            <input
              type={'number'}
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <button onClick={() => setNum((prev) => ++prev)}>+</button>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </Div>
  );
};

export default ItemDetailPage;
