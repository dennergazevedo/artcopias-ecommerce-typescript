import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 50px;
  padding: 20px;
  min-width: 300px;
  width: 50vw;
  box-shadow: 1px 1px 10px #3335;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
    padding: 10px;
  }

  hr {
    border-bottom: 1px solid #3331;
    width: 100%;

    @media only screen and (max-width: 600px) {
      margin: 5px;
    }
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #333;
    font-weight: 600;

    .icon {
      margin-right: 10px;
    }
  }

  .iconClose {
    font-size: 20px;
    color: #333;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  padding-top: 0px;

  @media only screen and (max-width: 600px) {
    padding: 10px;
    padding-top: 0px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    align-self: flex-end;

    label {
      font-size: 12px;
      margin-left: 10px;
      margin-top: 8px;
      font-weight: 600;
      color: #333;
    }
  }

  span {
    font-size: 12px;
    color: #333;
    text-align: justify;
    margin-top: 10px;

    @media only screen and (max-width: 600px) {
      font-size: 11px;
      margin-top: 5px;
    }
  }
`;
