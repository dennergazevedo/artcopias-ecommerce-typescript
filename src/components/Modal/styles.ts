import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  width: 50vw;
  max-width: 700px;
  min-width: 300px;
  min-height: 300px;
  z-index: 40;
`;

export const TitleModal = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 600;
  color: #13a5de;
  margin-top: -30px;
  margin-left: 10px;
  align-self: flex-start;
  .iconTitle {
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const ModalBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  font-size: 14px;
  padding-bottom: 50px;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
  span {
    color: #121212;
    margin-top: 20px;
  }
  ul {
    color: #121212;
    margin-top: 20px;
    font-weight: 600;
    span {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .iconUl {
      font-size: 18px;
      color: #13a5de;
      margin-right: 5px;
    }
    li {
      font-weight: 400;
      margin-left: 30px;
      i {
        font-size: 10px;
      }
    }
    b {
      color: #13a5de;
    }
  }
`;
