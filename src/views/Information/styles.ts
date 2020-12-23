import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  background-color: #333;
  border-radius: 5px;
  height: 30px;
  color: #fff;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    flex-direction: column;
    height: auto;
    padding: 5px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: 0.5s all;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 250px;

    @media only screen and (max-width: 600px) {
      background-color: #fff2;
      width: 90%;
      margin-top: 5px;

      &:focus {
        background-color: #fff5;
      }
    }

    &:hover {
      transition: 0.5s all;
      background-color: #fff2;
    }

    span {
      font-size: 14px;
      font-weight: 500;
    }

    .iconMenu {
      margin-right: 10px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: auto;
  background-color: #fff;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }

  .buttonDownload {
    width: 250px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .title {
    font-size: 16px;
    font-weight: 500;

    .iconTitle {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  span {
    margin-top: 10px;
    width: 80%;
    padding: 20px;
    font-size: 12px;
    text-align: justify;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
