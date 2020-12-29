import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background-color: #3331;
  margin-top: 10px;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const ImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 180px;
  width: auto;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Imagem = styled.img`
  display: flex;
  height: 150px;
  width: auto;
`;

export const Remove = styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #3339;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  .iconRemove {
    margin-left: 5px;
  }
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #3331;
  color: #333;
  height: 180px;
  width: 250px;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  .descProduct {
    font-size: 14px;
    font-weight: 600;
  }

  .descSizeQnt {
    font-size: 12px;
  }

  .descPrice {
    font-size: 14px;
  }
`;

export const Gabarito = styled.span`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #333;
  position: absolute;
  align-self: flex-end;
  margin-top: 130px;
  cursor: pointer;

  &:hover {
    color: #111;
  }

  .downloadIcon {
    margin-right: 5px;
  }
`;
