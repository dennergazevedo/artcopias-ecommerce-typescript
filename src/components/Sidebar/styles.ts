import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 10px #3333;
  width: 18vw;
  min-width: 200px;

  img {
    display: flex;
    width: 19vw;
    min-width: 230px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  max-width: 18vw;
  min-width: 200px;

  .divItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20px;
    margin-top: 5px;

    .spanItem {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #333;
      font-weight: 400;
      width: 90%;
      height: auto;
      cursor: pointer;
      padding: 5px;
      padding-left: 15px;
      padding-right: 15px;
      border-radius: 3px;

      &:hover {
        font-weight: 500;
        background-color: #f2f2f2;

        .iconItem {
          font-size: 16px;
        }

        .labelItem {
          font-weight: 600;
        }
      }

      .iconItem {
        font-size: 14px;
      }

      .labelItem {
        font-size: calc(11px + 0.2vw);
        cursor: pointer;
        color: #333;
        font-weight: 400;

        &:hover {
          color: #111;
          font-weight: 600;
        }
      }
    }
  }
`;
