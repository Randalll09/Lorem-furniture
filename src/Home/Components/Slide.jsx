import React, { useState } from 'react';
import styled from 'styled-components';
import Slides from '../utils/Slide.json';
import useInterval from '../../Utils/useInterval';
import px2vw from '../../Utils/px2vw';
import ArrowRight from '../../Svg/ArrowRight';
import ArrowLeft from '../../Svg/ArrowLeft';

const Ul = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  ul {
    transition: all 0.2s;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    width: max-content;
    left: calc(100vw * -${(props) => props.position});

    > li {
      position: relative;

      &:nth-of-type(even) {
        div.cover {
          width: ${px2vw(780)};
          right: 0;
          &::after {
            right: ${px2vw(1500)};
            width: ${px2vw(420)};
          }
        }
      }
    }
  }
  div.cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: ${({ theme }) => theme.txt};
    opacity: 0.8;
    width: ${px2vw(880)};
    height: 100%;
    &::after {
      background-color: ${({ theme }) => theme.txt};
      display: block;
      content: '';
      position: absolute;
      top: 0;
      width: ${px2vw(320)};
      height: 100%;
      left: ${px2vw(1600)};
    }
  }
  > div.txt {
    position: absolute;
    top: 0;
    height: 100%;
    z-index: 8;
    white-space: pre-wrap;
    left: calc(${({ theme }) => theme.left});
    font-family: ${({ theme }) => theme.mont};
    color: ${({ theme }) => theme.beige};
    > h1 {
      position: absolute;
      top: 120px;
      font: 500 36px/1.5 ${({ theme }) => theme.mont};
      margin-bottom: 120px;
      width: max-content;
    }
    > p {
      width: max-content;
      bottom: 120px;
      position: absolute;
      font: 500 24px/1.5 ${({ theme }) => theme.mont};
    }
  }
  > .arrow {
    position: absolute;
    top: 240px;
    z-index: 20;
    cursor: pointer;
    > svg {
      height: 40px;
      > path {
        stroke: ${({ theme }) => theme.beige};
        stroke-width: 20px;
        fill: #2b2b2b1d;
        transition: all 0.2s;
      }
    }
    &:nth-of-type(1) {
      left: calc(${({ theme }) => theme.left} - 100px);
    }
    &:nth-of-type(2) {
      right: calc(${({ theme }) => theme.left} - 100px);
    }
    &:hover {
      path {
        fill: ${({ theme }) => theme.beige};
      }
    }
  }
  > .idx {
    position: absolute;
    bottom: 56px;
    display: flex;
    z-index: 10;
    left: calc(${({ theme }) => theme.left} - 100px);
    gap: 12px;
    > li {
      cursor: pointer;
      width: 36px;
      height: 4px;
      background-color: ${({ theme }) => theme.beige};
      transition: all 0.2s;
      border: 1px solid ${({ theme }) => theme.beige};
      &.active {
        border: 1px solid ${({ theme }) => theme.beige};
        background-color: #2b2b2b0d;
      }
    }
  }
`;

const SlideCont = styled.div`
  width: 100vw;
  height: 560px;
  position: relative;
  > img {
    width: 100vw;
    height: 560px;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
`;

const Slide = () => {
  const [slide, setSlide] = useState(0);
  const length = Slides.length;
  const moveSlide = (direction) => {
    if (direction < 0) {
      slide > 0 ? setSlide(slide - 1) : setSlide(length - 1);
    } else {
      slide < length - 1 ? setSlide(slide + 1) : setSlide(0);
    }
  };
  return (
    <Ul position={slide}>
      <ul>
        {Slides.map((val, idx) => (
          <li key={idx}>
            <SlideCont>
              <img src={val.src} />
            </SlideCont>
          </li>
        ))}
      </ul>
      <div className="cover"></div>
      <div className="txt">
        <h1>{Slides[slide].title}</h1>
        <p>{Slides[slide].description}</p>
      </div>
      <button className="arrow" onClick={() => moveSlide(-1)}>
        <ArrowLeft />
      </button>
      <button className="arrow" onClick={() => moveSlide(1)}>
        <ArrowRight />
      </button>
      <ul className="idx">
        {Slides.map((val, idx) => (
          <li
            key={idx}
            onClick={() => setSlide(idx)}
            className={idx == slide ? 'active' : null}
          ></li>
        ))}
      </ul>
    </Ul>
  );
};

export default Slide;
