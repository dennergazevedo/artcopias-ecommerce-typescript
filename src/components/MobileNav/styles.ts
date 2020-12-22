import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  height: auto;
  background-color: #333;
  padding: 10px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff1;
    border-radius: 5px;
    font-size: 10px;
    color: #fff;
    cursor: pointer;
    margin: 5px;

    &:hover {
      background-color: #fff5;
    }

    &:focus {
      background-color: #fff5;
    }
  }
`;
