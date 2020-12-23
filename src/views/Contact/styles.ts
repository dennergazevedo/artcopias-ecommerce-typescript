import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  min-width: 300px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  font-size: 16px;
  font-weight: 500;

  .iconTitle {
    margin-right: 5px;
    font-size: 18px;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #3333;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  background-color: #3331;
  color: #333;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s all;
  width: 100%;
  height: 80px;

  &:hover {
    transition: 0.5s all;
    background-color: #3332;
  }

  .iconItem {
    display: flex;
    font-size: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 70%;
    min-width: 200px;

    .local {
      font-size: 14px;
      font-weight: 500;
    }

    span {
      font-size: 12px;
      color: #333;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    font-size: 12px;
    color: #fff;
    background-color: #333;
    transition: 0.5s all;
    margin-top: 10px;
    border-radius: 5px;

    &:hover {
      transition: 0.5s all;
      background-color: #111;
    }
  }

  .doubleDiv {
    .inputDiv {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;

    span {
      font-size: 10px;
      color: #333;
    }

    input {
      background-color: #fff;
      border: 1px solid #3335;
      border-radius: 3px;
      height: 35px;
      width: 100%;
      padding: 0px 0px 0px 10px;
      font-size: 10px;
    }

    textarea {
      background-color: #fff;
      border: 1px solid #3335;
      border-radius: 3px;
      min-height: 70px;
      height: 70px;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      padding: 5px 5px 5px 10px;
      font-family: 'Montserrat';
      font-size: 10px;
    }
  }
`;
