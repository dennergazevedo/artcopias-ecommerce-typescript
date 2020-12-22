import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  height: 70px;
  background-color: #fff;
  color: #a3a3a3;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 940px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    padding-bottom: 20px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  height: 70px;
  background-color: #fff;
  color: #a3a3a3;
  padding-left: 30px;
  padding-right: 30px;

  .iconBar {
    font-size: 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 940px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 940px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logomarca = styled.img`
  display: flex;
  height: 60px;
  width: auto;
  margin-right: 20px;
`;

export const ItemNav = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-decoration: none;
  color: #a3a3a3;
  transition: 0.5s all;
  font-weight: 400;
  margin-right: 20px;

  @media only screen and (max-width: 940px) {
    margin-top: 10px;
  }

  &:hover {
    transition: 0.5s all;
    color: #555;
  }

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const ItemNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-decoration: none;
  color: #a3a3a3;
  transition: 0.5s all;
  font-weight: 400;
  margin-right: 20px;

  @media only screen and (max-width: 940px) {
    margin-top: 10px;
  }

  &:hover {
    transition: 0.5s all;
    color: #555;
  }

  .icon {
    font-size: 16px;
    margin-right: 5px;
  }
`;

export const Divider = styled.hr`
  display: flex;
  align-self: center;
  border-top: 1px solid #3335;
  width: 90%;
  margin: 20px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: center;
  flex-direction: column;

  span {
    align-self: center;
    font-size: 12px;
    color: #555;
  }
`;

export const ItemDrop = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-decoration: none;
  color: #a3a3a3;
  transition: 0.5s all;
  font-weight: 400;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  font-family: 'Montserrat';
  width: auto;

  &:hover {
    transition: 0.5s all;
    color: #555;
  }

  .icon {
    font-size: 16px;
    margin-right: 5px;
  }

  .iconNav {
    font-size: 18px;
    margin-top: 5px;
  }
`;

export const DropButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  background-color: #fff;
  box-shadow: 1px 1px 10px #a3a3a3;
  width: auto;
  min-width: 230px;
  border-radius: 3px;
  height: auto;
  top: 60px;
  transition: 0.5s all;
  padding: 10px;
  z-index: 20;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 15px;
    color: #a3a3a3;

    &:hover {
      color: #555;
    }
  }

  div {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #a3a3a3;
    width: 100%;
    padding: 10px;

    &:hover {
      color: #555;
      background-color: #3331;
    }
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  margin-left: 20px;
  margin-right: 40px;
  cursor: pointer;

  a {
    transition: 0.5s all;
    text-decoration: none;
    color: #a3a3a3;

    &:hover {
      transition: 0.5s all;
      color: #555;
    }
  }
`;
