import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3331;
  width: 70%;
  min-width: 300px;
  height: auto;
  margin-top: 20px;
`;

export const Vazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 10px;

  span {
    font-size: 16px;
    font-weight: 600;
    color: #3339;
    margin-top: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;

  .iconTitle {
    font-size: 22px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 5px;

  .iconSubtitle {
    font-size: 16px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  padding-bottom: 0;

  .alert {
    font-size: 10px;
    color: #e54;
  }
`;

export const BodyCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50vw;
  min-width: 280px;
  border: 1px solid #3333;
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 12px;

  .register {
    font-size: 14px;
    color: #333;
    cursor: pointer;
    font-weight: 600;
    align-self: center;
  }

  .title {
    color: #333;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .editButton {
      font-size: 10px;
      cursor: pointer;
      color: #999;

      &:hover {
        color: #222;
      }
    }
  }
`;

export const ItemFinance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      width: 150px;
      height: auto;
      padding: 3px 10px;
      font-size: 10px;
      font-weight: 500;
      background-color: #9995;
      margin: 3px;
    }
  }
`;

export const ButtonFinish = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  transition: 0.5s all;
  font-size: 12px;

  .icon {
    margin-right: 10px;
  }

  &:hover {
    transition: 0.5s all;
    background-color: #111;
  }
`;

export const BackShop = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: #999;
  transition: 0.5s all;
  margin-top: 10px;

  &:hover {
    transition: 0.5s all;
    color: #333;
  }
`;
