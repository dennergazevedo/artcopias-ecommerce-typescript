import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;

  .icon {
    font-size: 20px;
  }

  span {
    margin-left: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  div {
    display: flex;
    width: 250px;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
`;
