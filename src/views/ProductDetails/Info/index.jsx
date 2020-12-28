/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

// STYLED COMPONENTS
import {
    Container,
    Title,
    Body,
    Item
} from './styles.js';

// ICONS
import {
    FaInfoCircle,
    FaPaste,
    FaPaintRoller
} from 'react-icons/fa';

export default function SizeQnt(props) {

    function insertData(){
        let tec = document.getElementById('infotec');
        tec.innerHTML = props.product.infotec;

        let acab = document.getElementById('infoacab');
        acab.innerHTML = props.product.infoacab;
    }

    useEffect(()=>{
        if(props.product)
            insertData();
    }, [props.product])

    return (
        <Container>
            <Title>
                INFORMAÇÕES EXTRAS
                <FaInfoCircle className="iconTitle"/>
            </Title>
            <Body>
                <Item>
                    <div>
                        <FaPaste className="icon"/>
                        <span>INFORMAÇÕES TÉCNICAS</span>
                    </div>
                    <span id="infotec" />
                </Item>
                <Item>
                    <div>
                        <FaPaintRoller className="icon"/>
                        <span>INFORMAÇÕES DE ACABAMENTO</span>
                    </div>
                    <span id="infoacab" />
                </Item>
            </Body>
        </Container>
    )
}
