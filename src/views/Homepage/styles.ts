import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-right: 50px;

  @media only screen and (max-width: 650px) {
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
  max-width: 70vw;
  height: auto;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30vw;
  height: auto;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: auto;
  margin-right: 100px;
`;
