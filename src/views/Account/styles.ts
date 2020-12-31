import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  margin: 50px;
  padding: 10px;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  color: #333;
  font-weight: 500;

  .titleIcon {
    margin-right: 5px;
    font-size: 20px;
  }
`;

export const Subtitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #333;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;
