import css from './infos.module.css'
import { Row, Col, Container } from 'reactstrap'
import Image from "next/image";
import React, {useState} from "react"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function Infos (){


    function onChange() {
        console.log('estou aqui')
    }

    return(
        <div className={css.background}>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap');
</style>

            <Container>
                <Row className={css.row}>
                    <Col>
                    <Image className={css.image} src="/imgs/icon-1.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio <br/> é</div>
                    <div>
                        <ContadorAgro2 numero1={27} numero2={4}/>
                    </div>
                    <div className={css.title2}>do PIB do Brasil*</div>
                    </Col>
                    <Col>
                    <Image className={css.image} src="/imgs/icon-2.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio <br/>gerou</div>
                    <div className={css.value}>
                        <span style={{fontFamily: "Raleway", fontSize: "35px"}}>
                            R$
                            </span>

                    </div>
                    <div className={css.title2}>trilhão*</div>
                    </Col>

                    <Col>
                    <Image className={css.image} src="/imgs/icon-3.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio<br/>teve um superavit de</div>
                    <div>
                        <span style={{fontFamily: "Raleway", fontSize: "35px"}}>U$</span>
                        <ContadorAgro2 numero1={102} numero2={1}/>
                    </div>
                    <div className={css.title2}>bilhões em 2021**</div>
                    </Col>
                </Row>
                <Row className={css.fonts}>
                    <div>
                    *Fonte: Centro de Estudos Avançados em Economia Aplicada (Cepea), da Esalq/USP, em parceria com a Confederação da Agricultura e Pecuária do Brasil (CNA)
                    </div>
                    <div>
                    ** Fonte: Instituto de Pesquisa Econômica Aplicada (Ipea)
                    </div>
                </Row>
            </Container>
        </div>
    )
}

function ContadorAgro2({numero1, numero2}) {
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
                <div style={{ height: 100 }}>
                    {isVisible ?
                        <div className={css.value}>
                            <CountUp end={numero1} duration={4}/>,
                            <CountUp end={numero2} duration={4}/>%
                        </div>: null}
                </div>
            )}
        </VisibilitySensor>
    )
}


function ContadorAgro3({numero1, numero2}) {
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
                <div style={{ height: 100 }}>
                    {isVisible ?
                        <div className={css.value}>
                            $
                            <CountUp end={numero1} duration={4}/>,
                            <CountUp end={numero2} duration={4}/>%
                        </div>: null}
                </div>
            )}
        </VisibilitySensor>
    )
}
