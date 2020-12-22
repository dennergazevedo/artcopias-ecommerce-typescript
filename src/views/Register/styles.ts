import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100vw;
  height: auto;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  width: 45vw;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  width: 45vw;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-top: 15px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    display: flex;
    align-items: center;
    color: #333;
    margin: 0;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  span {
    font-size: 12px;
    color: #333;
    text-align: center;
  }

  .iconTitle {
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background-image: linear-gradient(to right, #00a1eb, #00efc5);
    color: #fff;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Montserrat';
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top: 10px;

    span {
      display: flex;
      align-self: flex-start;
      font-size: 12px;
      color: #333;
    }

    .forgotPass {
      display: flex;
      align-self: flex-start;
      font-size: 12px;
      font-weight: 500;
      color: #333;
      margin-top: 5px;
      cursor: pointer;

      &:hover {
        color: #111;
      }
    }

    input {
      display: flex;
      background-color: #fff;
      border: 1px solid #a3a3a3;
      color: #333;
      font-size: 12px;
      width: 100%;
      height: 35px;
      border-radius: 5px;
      padding: 0px 0px 0px 10px;
      margin-top: 5px;
    }

    .doubleInput {
      width: 98%;
    }
  }

  .doubleDiv {
    flex-direction: row;
  }
`;
