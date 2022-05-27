import css from './infos.module.css'
import { Row, Col, Container } from 'reactstrap'
import Image from "next/image";
import React, {useState} from "react"
import AnimatedNumber from 'react-animated-number';
import CountUp, { useCountUp } from 'react-countup';

export default function Infos (){
    const [counter, setCounter]=useState(0)
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
                    <div className={css.value}>
                    {/* <AnimatedNumber 
                    value={counter}
                    style={
                        {
                            fontSize: 70
                        }
                    }
                    formatValue={n=>n.toFixed(0) }
                    frameStyle={percentage=>percentage>20 && percentage<80 ? {opacity: 0.5}:{}}
                    /> */}
                    <CountUp end={27} duration={4}/>,<CountUp end={4} duration={4}/>%</div>
                    <div className={css.title2}>do PIB do Brasil*</div>
                    {/* <div className='area'>
                        <button onClick={()=>setCounter(counter + 27)}></button>
                    </div> */}
                    </Col>

                    <Col>
                    <Image className={css.image} src="/imgs/icon-2.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio <br/>gerou</div>
                    <div className={css.value}>
                        <span style={{fontFamily: "Raleway", fontSize: "35px"}}>
                            R$
                            </span>
                            <CountUp end={1} duration={4}/>,<CountUp end={98} duration={4}/></div>
                    <div className={css.title2}>trilhão*</div>
                    </Col>

                    <Col>
                    <Image className={css.image} src="/imgs/icon-3.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio<br/>teve um superavit de</div>
                    <div className={css.value}><span style={{fontFamily: "Raleway", fontSize: "35px"}}>U$</span><CountUp end={102} duration={4}/>,<CountUp end={1} duration={4}/></div>
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