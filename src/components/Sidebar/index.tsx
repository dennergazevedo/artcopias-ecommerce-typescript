/*eslint-disable*/
import React from "react";

/** Components */
import menuAdesivos from '../../assets/img/menuadesivos.png'
import menuLona from '../../assets/img/menulona.png'
import menuBrindes from '../../assets/img/menubrindes.png'
import menuFesta from '../../assets/img/menufesta.png'
import menuEmpresarial from '../../assets/img/menuempresarial.png'
import menuCovid from '../../assets/img/menucovid.png'

/** Services */
import history from '../../services/history';

/** Styled Components */
import { Container, Item } from './styles'

/** Icons */
import { FaAngleRight } from 'react-icons/fa';

const Sidebar: React.FC = () => {

    const handleMenu = (menu: string, params: string) => {
        history.push(`/menu-product/${menu}/${params}`)
        location.reload();
    }

    const Covid = [
        "Face Shield",
        "Escudo",
        "Dispenser",
        "Distanciamento",
    ]

    const Adesivo = [
        "Vinil",
        "BOPP",
        "Etiqueta",
        "Troca de Óleo",
        "Transparente",
        "Jateado",
        "Perfurado",
        "Recorte",
        "Refletivo",
    ]

    const Lona = [
        "Premium",
        "BackLight",
        "Promocional",
        "Canvas",
    ]

    const Brinde = [
        "Agenda",
        "Squeeze",
        "Caneta",
        "Bottom",
        "Chaveiro",
        "Mousepad",
        "Caneca",
        "Copo",
        "Taça",
        "Homenagem",
        "Camisa",
    ]

    const Festa = [
        "Adesivo",
        "Convite",
        "Painel",
        "Backdrop",
        "Pulseira",
        "Pista",
        "Topper",
        "Caneca",
        "Copo",
        "Taça",
    ]

    const Empresarial = [
        "Adesivo",
        "Acrílico",
        "Banner / Lona",
        "Carimbo",
        "Cartão Visita",
        "Cavalete",
        "Crachá",
        "Display",
        "Emergência",
        "Folder",
        "Imobiliária",
        "Panfleto",
        "Placa",
        "Quadro",
        "Sinalização",
        "Tags / Etiquetas",
        "Trânsito",
        "Urna",
    ]


    return (
        <Container>
            <img src={menuCovid} alt="Covid" className="containerImg" />
            <Item>
                {
                    Covid.map(covid => (
                        <div className="divItem">
                            <span
                                onClick={() => handleMenu("Covid", covid)}
                                className="spanItem">
                                    <FaAngleRight className="iconItem" />
                                    <span className="labelItem">
                                        {covid}
                                    </span>
                            </span>
                            <hr className="divider" />
                        </div>
                    ))
                }
            </Item>

            <img src={menuAdesivos} alt="Adesivos" className="containerImg" />
            <Item>
                {
                    Adesivo.map(adesivo => (
                        <div className="divItem">
                            <span
                                onClick={() => handleMenu("Adesivos", adesivo)}
                                className="spanItem">
                                    <FaAngleRight className="iconItem" />
                                    <span className="labelItem">
                                        {adesivo}
                                    </span>
                            </span>
                            <hr className="divider" />
                        </div>
                    ))
                }
            </Item>

            <img src={menuLona} alt="Banner / Lona" className="containerImg" />
            <Item>
                {
                    Lona.map(lona => (
                        <div className="divItem">
                            <span
                                onClick={() => handleMenu("Lonas", lona)}
                                className="spanItem">
                                    <FaAngleRight className="iconItem" />
                                    <span className="labelItem">
                                        {lona}
                                    </span>
                            </span>
                            <hr className="divider" />
                        </div>
                    ))
                }
            </Item>

            <img src={menuBrindes} alt="Brindes" className="containerImg" />
            <Item>
                {
                    Brinde.map(brinde => (
                        <div className="divItem">
                            <span
                                onClick={() => handleMenu("Brinde", brinde)}
                                className="spanItem">
                                    <FaAngleRight className="iconItem" />
                                    <span className="labelItem">
                                        {brinde}
                                    </span>
                            </span>
                            <hr className="divider" />
                        </div>
                    ))
                }
            </Item>

            <img src={menuFesta} alt="Festa" className="containerImg" />
            <Item>
                {
                    Festa.map(festa => (
                        <div className="divItem">
                            <span
                                onClick={() => handleMenu("Festa", festa)}
                                className="spanItem">
                                    <FaAngleRight className="iconItem" />
                                    <span className="labelItem">
                                        {festa}
                                    </span>
                            </span>
                            <hr className="divider" />
                        </div>
                    ))
                }
            </Item>

            <img src={menuEmpresarial} alt="Empresarial" className="containerImg" />
            <Item>
                {
                    Empresarial.map(empresarial => (
                        <div className="divItem">
                            <span
                                onClick={() => handleMenu("Empresarial", empresarial)}
                                className="spanItem">
                                    <FaAngleRight className="iconItem" />
                                    <span className="labelItem">
                                        {empresarial}
                                    </span>
                            </span>
                            <hr className="divider" />
                        </div>
                    ))
                }
            </Item>
        </Container>
    );
}

export default Sidebar;
