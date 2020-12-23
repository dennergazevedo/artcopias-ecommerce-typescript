import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  padding: 20px;
  margin: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #3335;
  margin-bottom: 50px;
  width: 50vw;
  min-width: 300px;

  .descricao {
    display: flex;
    text-align: justify;
    margin: 10px;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 12px;
  }

  input {
    width: 70%;
    min-width: 200px;
    height: 35px;
    border: 1px solid #3335;
    color: #333;
    font-size: 12px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 0px 0px 0px 20px;

    &:disabled {
      background-color: #9995;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 20px;
    font-weight: 600;

    .iconButton {
      margin-right: 10px;
    }
  }

  .buttonBack {
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 20px;
    color: #333;

    &:hover {
      color: #111;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #333;
  width: 100%;
  color: #fff;
  padding: 10px;
  padding-left: 20px;

  .title {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }

    .icon {
      margin-right: 10px;
    }
  }

  .subTitle {
    font-size: 12px;
  }
`;

export const FormPassword = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  input {
    width: 40%;
    min-width: 180px;
    height: 35px;
    border: 1px solid #3335;
    color: #333;
    font-size: 12px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 0px 0px 0px 20px;
  }
`;
