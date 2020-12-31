import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 80vw;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 100vw;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    width: 85%;
    margin-bottom: 0;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  margin: 20px;

  @media only screen and (max-width: 600px) {
    width: 85%;
    margin-top: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 10px;
  background-color: #333;
  border-radius: 5px;
  width: 100%;
  padding: 10px;

  .iconItem {
    font-size: 16px;
    margin-right: 5px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #f2f2f2;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  transition: 0.5s all;
  margin-bottom: 10px;

  &:hover {
    transition: 0.5s all;
    background-color: #3332;
  }

  .iconItem {
    cursor: pointer;
    font-size: 16px;
    margin-right: 5px;
  }
`;

export const Divider = styled.hr`
  display: flex;
  border-left: 1px solid #3335;
  height: 15vw;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #333;

  .tabTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    height: 35px;
    font-size: 14px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
    margin-top: 10px;
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
