import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0001;
  color: #333;
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
    color: #333;
    font-size: 14px;
    text-align: start;
    margin-top: 5px;

    &:hover {
      color: #111;
    }
  }

  span {
    font-size: 12px;
    text-align: justify;
  }

  input {
    display: flex;
    width: 100%;
    height: 35px;
    border: 1px solid #a3a3a3;
    color: #a3a3a3;
    font-size: 12px;
    padding: 0px 0px 0px 20px;
    border-radius: 5px;
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
