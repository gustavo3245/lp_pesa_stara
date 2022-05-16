import css from './infos.module.css'
import { Row, Col, Container } from 'reactstrap'
import Image from "next/image";

export default function Infos (){
    return(
        <div className={css.background}>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap');
</style>
            <Container>
                <Row className={css.row}>
                    <Col>
                    <Image src="/imgs/icon-1.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio <br/> é</div>
                    <div className={css.value}>27,4%</div>
                    <div className={css.title}>do PIB do Brasil*</div>
                    </Col>

                    <Col>
                    <Image src="/imgs/icon-2.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio <br/>gerou</div>
                    <div className={css.value}>
                        {/* <p style={{fontFamily: "Raleway", fontSize: "35px"}}> */}
                            R$
                            {/* </p> */}
                             1,98</div>
                    <div className={css.title}>trilhão*</div>
                    </Col>

                    <Col>
                    <Image src="/imgs/icon-3.png" width={91} height={91} alt="icon"/>
                    <div className={css.title}>O agronegócio<br/>teve um superavit de</div>
                    <div className={css.value}>U$  102,1</div>
                    <div className={css.title}>bilhões em 2021**</div>
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