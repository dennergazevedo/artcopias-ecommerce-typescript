import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-right: 50px;
  margin-top: 50px;

  @media only screen and (max-width: 700px) {
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 70vw;
  height: auto;

  @media only screen and (max-width: 1000px) {
    width: 65vw;
  }

  @media only screen and (max-width: 800px) {
    width: 58vw;
  }

  @media only screen and (max-width: 700px) {
    align-self: center;
    width: 90vw;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    color: #fff;
    font-weight: 500;

    .iconTitle {
      font-size: 18px;
      margin-right: 5px;
    }
  }

  div {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 600px) {
      justify-content: flex-start;
      margin-top: 10px;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      margin-right: 10px;

      .icon {
        margin-right: 5px;
      }
    }

    select {
      display: flex;
      font-size: 12px;
      background-color: #fff;
      border: 1px solid #3335;
      padding: 5px 5px 5px 10px;
      border-radius: 5px;
    }
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
