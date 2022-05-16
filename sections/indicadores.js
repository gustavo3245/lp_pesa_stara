import css from "./indicadores.module.css"
import { Row, Col, Container } from "reactstrap"
import Image from "next/image"
import { faSortUp } from "@fortawesome/free-solid-svg-icons"

export default function Indicadores () {
    return(
        <div className={css.bgcolor}>
            <Container>
                <div className={css.titleSection}>Indicadores Agrícolas</div>
                <Row style={{marginTop: 40}}>
                    <Col style={{textAlign: "center"}}>
                    <Image src="/imgs/soja.png" width={34} height={39}/>
                    <div className={css.name}>Soja</div>
                    <div className={css.value}>R$ 178,00</div>
                    <div className={css.variacao}>Variação (%): +0.56</div>
                    <div className={css.praca}>Praça: Londrina/PR (Integrada)</div>
                    </Col>

                    <Col style={{textAlign: "center"}}>
                    <Image src="/imgs/trigo.png" width={34} height={39}/>
                    <div className={css.name}>Trigo</div>
                    <div className={css.value}>R$ 96,00</div>
                    <div className={css.variacao}>Variação (%): +0.56</div>
                    <div className={css.praca}>Praça: Londrina/PR (Integrada)</div>
                    </Col>

                    <Col style={{textAlign: "center"}}>
                    <Image src="/imgs/milho.png" width={34} height={39}/>
                    <div className={css.name}>Milho</div>
                    <div className={css.value}>R$ 178,00</div>
                    <div className={css.variacao}>Variação (%): +0.56</div>
                    <div className={css.praca}>Praça: Londrina/PR (Integrada)</div>
                    </Col>
                </Row>
                <div className={css.divider}></div>
                <div style={{marginTop: 50}} className={css.titleSection}>Indicadores Financeiros</div>
                <Row>
                    <Col></Col>
                    <Col>
                    <div className={css.indicadores}><b>EUR/USD</b></div>
                    </Col>

                    <Col>
                    <div>
                        Compra: 1,0522
                    </div>
                    <div>
                        Venda: 1,0527
                    </div>
                    </Col>

                    <Col>
                    <div>
                        Máxima: 1,0522
                    </div>
                    <div>
                        Mínima: 1,0527
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}