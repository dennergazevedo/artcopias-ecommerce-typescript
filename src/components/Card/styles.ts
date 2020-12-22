import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
  width: 30vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    margin-top: 20px;
  }

  a {
    display: flex;
    align-self: center;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    text-align: start;
    margin-top: 5px;

    &:hover {
      color: #f2f2f2;
    }
  }

  span {
    font-size: 12px;
    text-align: justify;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background-image: linear-gradient(to right, #00a1eb, #00efc5);
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin-top: 30px;
    transition: 0.5s all;

    &:hover {
      box-shadow: 2px 2px 5px #00efc5;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    padding: 20px;
    display: flex;
  }
`;
