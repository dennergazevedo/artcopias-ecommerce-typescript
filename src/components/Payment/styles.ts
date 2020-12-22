import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
  cursor: default;

  .divider {
    border-left: 1px solid #3335;
    height: 70px;
    margin: 20px;
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0091ff;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
  }

  .title {
    font-size: 14px;
    color: #0091ff;
    font-weight: 500;
    margin-left: 10px;
  }
`;

export const Bandeiras = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 50vw;

  @media only screen and (max-width: 800px) {
    max-width: 80vw;
  }

  img {
    width: 50px;
    margin: 10px;
  }
`;
