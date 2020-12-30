import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  padding: 20px;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  min-width: 300px;
  background-color: #3331;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  align-items: center;
  align-self: center;
  justify-content: space-between;

  .divRight {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    .divFinal {
      font-size: 10px;
      font-weight: 600;
      background-color: #333;
      display: flex;
      color: #fff;
      width: 200px;
      height: auto;
      justify-content: center;
      padding: 5px;
      align-items: center;
      align-self: center;
    }

    @media only screen and (max-width: 600px) {
      width: 100%;
      margin-top: 20px;
    }

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 10px;
      padding: 10px;
      background-color: #fff;
      color: #fff;
      border-radius: 3px;
      justify-content: center;
      margin-top: 5px;
      height: 30px;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }

      .icon {
        margin-right: 5px;
      }

      &:hover {
        background-color: #f2f2f2;
      }
    }

    span {
      font-size: 12px;
      color: #3339;
      cursor: pointer;
      margin-top: 10px;

      @media only screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
      }

      &:hover {
        color: #333;
      }
    }
  }

  .divLeft {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    .barra {
      width: 100%;
      display: flex;
      padding: 5px;
      align-self: center;
      background-color: #333;
    }

    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 5px;

      .left {
        display: flex;
        font-size: 12px;
        padding-left: 10px;
        color: #333;
        width: 150px;
        background-color: #3332;

        @media only screen and (max-width: 600px) {
          width: 120px;
        }
      }

      .right {
        display: flex;
        font-size: 12px;
        padding-left: 10px;
        color: #333;
        width: 150px;
        background-color: #3331;

        @media only screen and (max-width: 600px) {
          width: 120px;
        }
      }
    }
  }
`;

export const TitleAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .iconTitle {
    margin-right: 10px;
    font-size: 24px;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #333;
  color: #fff;
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;

  .iconTitle {
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const ListEntrega = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Retirada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 1px #3331;
  border-radius: 5px;
  width: 30vw;
  min-width: 250px;
  margin-top: 20px;
  cursor: pointer;
  border: 2px solid #fff;
  z-index: 1;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      margin-top: 5px;
    }

    .icon {
      margin-right: 5px;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  font-size: 12px;

  span {
    b {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;
      width: 100%;
    }
  }
`;

export const SemEntrega = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 1px #3331;
  border-radius: 5px;
  width: 30vw;
  min-width: 250px;
  margin-top: 20px;
  cursor: pointer;
  color: #e54;

  .icon {
    font-size: 16px;
    margin-right: 10px;
  }

  span {
    font-size: 12px;
    font-weight: 600px;
  }
`;

export const ValorFrete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: #333;
  padding: 10px;
  margin-top: 20px;
`;

export const PrecoPrazo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 10px;
  color: #fff;
  font-size: 12px;

  span {
    margin-left: 10px;
  }
`;

export const Back = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  font-size: 12px;
  color: #3339;
  cursor: pointer;
  margin-top: 20px;

  .icon {
    margin-right: 10px;
  }

  &:hover {
    color: #333;
  }
`;

export const Edit = styled.span`
  display: flex;
  text-align: center;
  font-size: 10px;
  color: #333;
  cursor: pointer;
  position: absolute;
  align-self: flex-end;
  margin-top: -80px;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    margin-top: -100px;
  }

  &:hover {
    color: #111;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  padding: 20px;
  width: 60vw;
  min-width: 300px;
  margin-top: 100px;

  hr {
    border-bottom: 1px solid #3331;
    width: 100%;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .iconTitle {
    font-size: 14px;
    margin-right: 5px;
  }

  .iconClose {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  align-self: center;
  margin-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    span {
      font-size: 10px;
      color: #333;
      margin-right: 10px;
      width: 100px;
    }

    input {
      width: 20vw;
      min-width: 230px;
      height: 35px;
      padding: 0px 0px 0px 10px;
      color: #333;
      background-color: #fff;
      border: 1px solid #333;
      border-radius: 5px;
    }
  }
`;

export const ButtonSave = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #333;
  color: #fff;
  margin: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  .iconSave {
    margin-right: 5px;
    font-size: 14px;
  }
`;
