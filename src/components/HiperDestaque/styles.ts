import styled from 'styled-components';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 100px;
  overflow: hidden;
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

interface IContainerProps {
  sliding: number;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: auto;
  cursor: grab;
  transition: transform 1s ease;
  transform: ${props =>
    props.sliding
      ? `translateX(calc(-100vw * ${props.sliding}))`
      : `translateX(0%)`};
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ButtonNext = styled.span`
  display: flex;
  position: absolute;
  right: 20px;
  font-size: 50px;
  color: #3335;
  padding: 0;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    right: 10px;
  }
  .icon {
    cursor: pointer;
    &:hover {
      color: #3338;
    }
  }
`;

export const ButtonBack = styled.span`
  display: flex;
  position: absolute;
  left: 20px;
  font-size: 50px;
  color: #3335;
  padding: 0;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    left: 10px;
  }
  .icon {
    cursor: pointer;
  }
  &:hover {
    color: #3338;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: auto;
`;

export const ItemDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ItemPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 300px;
    width: auto;
  }
`;

export const Title = styled.h1`
  color: #333;
`;

export const Cod = styled.span`
  margin-top: 10px;
  margin-bottom: 30px;
  color: #e54;
  font-size: 10px;
`;

export const Text = styled.div`
  display: flex;
  text-align: justify;
  width: 100%;
  font-size: 12px;
  color: #333;
`;

export const Button = styled.button`
  display: flex;
  background-image: linear-gradient(to right, #0091ff, #00e0c2);
  color: #fff;
  font-weight: 600;
  padding: 10px;
  font-size: 14px;
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 5px;
  transition: 0.5s all;

  &:hover {
    transition: 0.5s all;
    box-shadow: 1px 1px 5px #3332;
  }
`;
