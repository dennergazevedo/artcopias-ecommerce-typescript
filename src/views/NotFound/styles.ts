import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  img {
    width: 300px;
    height: auto;
  }

  h1 {
    font-weight: 600;
    color: #007bff;
  }

  a {
    text-decoration: none;
    margin-top: 20px;
    color: #007bff;
  }
`;
