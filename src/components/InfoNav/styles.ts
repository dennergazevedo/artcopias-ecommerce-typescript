import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #9995;
  color: #333;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 25vw;
  min-width: 250px;

  .iconItem {
    font-size: 30px;
  }

  span {
    margin-top: 10px;
    color: #333;
    font-size: 12px;
    text-align: justify;
  }
`;
