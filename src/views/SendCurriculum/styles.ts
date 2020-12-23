import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  color: #333;
  font-weight: 500;

  .titleIcon {
    margin-right: 5px;
    font-size: 20px;
  }
`;

export const Subtitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #333;
  width: 80%;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Nota = styled.span`
  display: flex;
  font-size: 12px;
  color: #e54;
  text-align: justify;
  width: 60%;
  padding: 10px;
  border: 1px solid #3335;
  margin: 20px;
  min-width: 300px;
`;

export const Imagens = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  img {
    margin: 10px;
  }
`;

export const ButtonSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  height: 40px;
  width: 200px;
  margin: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    background-color: #333;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    border-radius: 5px;
    transition: 0.5s all;
    margin-top: 20px;

    &:hover {
      transition: 0.5s all;
      background-color: #111;
    }
  }

  .msgItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 76%;

    .divCheck {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      justify-content: center;

      span {
        font-size: 14px;
        color: #333;
        font-style: italic;
      }
    }

    span {
      font-size: 10px;
      color: #333;
    }

    textarea {
      width: 100%;
      height: 70px;
      background-color: #fff;
      color: #333;
      font-size: 12px;
      padding: 0px 0px 0px 20px;
      border: 1px solid #3335;
    }
  }

  .doubleDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .divItem {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 10px;

      span {
        font-size: 10px;
        color: #333;
      }

      select {
        width: 20vw;
        height: 35px;
        min-width: 200px;
        background-color: #fff;
        color: #333;
        font-size: 12px;
        padding: 0px 0px 0px 20px;
        border: 1px solid #3335;
      }

      input {
        width: 20vw;
        height: 35px;
        min-width: 200px;
        background-color: #fff;
        color: #333;
        font-size: 12px;
        padding: 0px 0px 0px 20px;
        border: 1px solid #3335;
      }
    }
  }
`;

export const ProgressDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    font-size: 12px;
  }
`;
