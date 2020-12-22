import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  background-color: #333;
  height: auto;
  color: #fff;
  font-size: 12px;
  padding: 20px;

  @media only screen and (max-width: 800px) {
    text-align: center;
  }

  span {
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
    }
  }
`;
