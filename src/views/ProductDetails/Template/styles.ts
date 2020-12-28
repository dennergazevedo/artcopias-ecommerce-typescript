import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  .downloadButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 80%;
      height: auto;
      cursor: pointer;
    }
  }
`;

export const ButtonDownload = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  background-color: #fff;
  border-bottom: 3px solid #0dcc06;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
    border-bottom: 3px solid #09a803;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 50px;
  background-color: #0dcc06;
  color: #fff;
  font-size: 30px;
  border-radius: 5px 0px 0px 0px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  text-align: center;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

export const Subtitle = styled.span`
  font-size: 8px;
  color: #0dcc06;
  font-weight: 500;
  margin-top: 5px;
`;
