import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: auto;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
  }

  .listIcons {
    margin-left: 100px;

    @media only screen and (max-width: 600px) {
      margin-left: 0;
    }

    a {
      img {
        width: 250px;
        height: auto;
      }
    }
  }
`;

export const InstaContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;

  .iconInsta {
    margin-right: 5px;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin-top: 20px;
`;
