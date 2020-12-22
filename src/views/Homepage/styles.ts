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
  flex-direction: row;
  justify-content: space-between;
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
