import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100vw;
  align-self: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20vh;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  min-width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 5px #3335;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  min-width: 300px;
  margin-top: 30px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #333;
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  .iconTitle {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const Gabarito = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  padding: 10px;
  width: 100%;
`;

export const Imagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;

  img {
    width: 80%;
    height: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Prazo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  background-color: #e54;
  color: #fff;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;

  .icon {
    font-size: 14px;
    margin-right: 5px;
  }

  b {
    margin-left: 10px;
  }
`;

export const Resumo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const BodyResumo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  padding: 10px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    width: 100%;

    span {
      border: 1px solid #3331;
      width: 50%;
      padding: 3px;
      padding-right: 5px;
      text-align: end;
      margin-top: 5px;
    }

    .title {
      font-weight: 600;
      background-color: #3331;
      width: 50%;
      padding: 3px;
      padding-left: 5px;
      margin-top: 5px;
      text-align: start;
    }
  }
`;
