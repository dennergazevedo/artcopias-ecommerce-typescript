import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 5px #3332;
  width: 250px;
  cursor: pointer;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 230px !important;
  height: 230px !important;
  cursor: pointer;

  .imgOn {
    display: flex;
    justify-content: center;
    width: 170px;
    height: auto;
    z-index: 2;
  }

  .imgOff {
    display: flex;
    justify-content: center;
    width: 190px;
    height: auto;
  }
  .circle {
    position: absolute;
    z-index: 0;
    width: 200px;
    height: 200px;
    align-self: center;
    z-index: 1;
  }
`;

export const Nome = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #333;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: 30px;
  font-weight: 600;

  span {
    cursor: pointer;
  }
`;

export const Unidade = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  cursor: pointer;
  font-size: 12px;
  color: #909090;
  text-align: center;
  font-style: italic;
`;
