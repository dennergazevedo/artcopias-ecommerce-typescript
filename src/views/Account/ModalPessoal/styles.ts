import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  width: auto;
  align-self: flex-end;
  color: #999;
  font-weight: 500;
  font-size: 14px;
  margin: 20px;
  margin-bottom: 0;
  transition: 0.5s all;

  &:hover {
    transition: 0.5s all;
    color: #111;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 20px;
  margin-bottom: 0;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  color: #333;

  .iconTitle {
    margin-right: 5px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #e54;

  @media only screen and (max-width: 600px) {
    width: 85vw;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
  margin-top: 0;

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

  .doubleDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
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

      input {
        width: 15vw;
        height: 35px;
        min-width: 150px;
        background-color: #fff;
        color: #333;
        font-size: 12px;
        padding: 5px 5px 5px 20px;
        border: 1px solid #3335;
        max-width: 350px;

        @media only screen and (max-width: 600px) {
          width: 80vw;
        }

        &:disabled {
          background-color: #f2f2f2;
        }
      }
    }
  }
`;

export const Divider = styled.hr`
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  margin: 0;
  margin-top: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .cancel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;
    border-radius: 5px;
    color: #fff;
    background-color: #e54;
    transition: 0.5s all;
    font-size: 12px;
    margin-right: 10px;

    &:hover {
      transition: 0.5s all;
      background-color: #911c0f;
    }
  }

  .confirm {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;
    border-radius: 5px;
    color: #fff;
    background-color: #333;
    transition: 0.5s all;
    font-size: 12px;

    &:hover {
      transition: 0.5s all;
      background-color: #111;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #3335;
  margin-top: 100px;
  background-color: #fff;
`;
