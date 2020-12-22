/*eslint-disable*/
import React from "react";

/** Styled Components */
import { Container } from './styles';

/** Assets */
import notResult from '../../assets/img/NOTRESULT.png'

/** Interfaces */
interface IProps {
  search: string;
}

function NotResult({ search }: IProps){
    return (
        <>
            {
                screen.width > 990 && window.innerWidth > 990 ?
                    <Container>
                        <img src={notResult} alt=":(" height="250px" width="137px"/>
                        <span className="title">Nenhum resultado encontrado.</span>
                        <span className="subTitle">Desculpe, não encontramos nenhum resultado para a busca "{search}"</span>
                    </Container>
                    :
                    <Container>
                        <img src={notResult} alt=":("/>
                    </Container>
            }
        </>
    );
}

export default NotResult;
