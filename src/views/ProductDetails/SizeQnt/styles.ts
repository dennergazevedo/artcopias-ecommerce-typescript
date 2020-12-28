import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 300px;
  box-shadow: 1px 1px 5px #3335;
  background-color: #fff;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #333;
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  .iconTitle {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  background-color: #fff;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    padding-top: 0;
  }
`;

export const Size = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const TitleSize = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;

  .icon {
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const SubTitleSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #333;
  margin-bottom: 15px;
`;

export const Dimensions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 5px;

    input {
      background-color: #fff;
      border: 1px solid #3339;
      border-radius: 5px;
      padding: 0px 0px 0px 10px;
      height: 35px;
      color: #333;
      font-size: 12px;

      &:hover {
        border: 1px solid #333;
      }

      &:focus {
        border: 1px solid #333;
      }

      &:disabled {
        background-color: #3331;
      }
    }

    span {
      font-size: 10px;
      color: #3339;

      .icon {
        margin-right: 5px;
      }
    }
  }
`;

export const Quantidade = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 20px;
    margin: 5px;
    cursor: pointer;
    color: #333;
  }

  input {
    background-color: #fff;
    border: 1px solid #3339;
    border-radius: 5px;
    padding: 0px 0px 0px 10px;
    width: 80px;
    height: 35px;
    color: #333;
    font-size: 12px;

    &:hover {
      border: 1px solid #333;
    }

    &:focus {
      border: 1px solid #333;
    }
  }
`;

export const Next = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  margin-top: 30px;

  .icon {
    font-size: 14px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #111;
  }
`;
