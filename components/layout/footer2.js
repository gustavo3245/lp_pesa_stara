import css from "./footer2.module.css"
import {Row, Col, Container} from "reactstrap"

export default function Footer2 () {
    return(
        <div className={css.bgcolor}>
            <Container>
                <Row>
                    <Col md="3" sm="12">
                    <div className={css.cidade}>Cambé/PR</div>
                    <div className={css.info}>PESA AGRO COMÉRCIO DE MÁQUINAS S/A</div>
                    <div className={css.info}>Rod. Celso Garcia Cid, km 87 - Lote 234 A - Parque Industrial, Cambé - PR, 86183 - 600</div>
                    <div style={{marginBottom: 30}} className={css.info}>Telefone: (43) 3154 - 0278</div>
                    </Col>
                    <Col md="3" sm="12">
                    <div className={css.cidade}>Ivaporã/PR</div>
                    <div className={css.info}>Av. Ladislau Gil Fernanders, 1140 - Maanaim, Ivaporã - PR, 86870 - 000</div>
                    <div style={{marginBottom: 30}} className={css.info}>Telefone: (43) 3484-1250</div>
                    </Col>
                    <Col md="3" sm="12">
                    <div className={css.cidade}>Cornélio Procópio/PR</div>
                    <div className={css.info}>Rodovia BR 369, KM 88, Vila Galeano, Cornélio Procópio/PR</div>
                    <div style={{marginBottom: 30}} className={css.info}>Telefone: (43) 3401-9900</div>
                    </Col>
                    <Col md="3" sm="12">
                    <div className={css.cidade}>Maringá/PR</div>
                    <div className={css.info}>PESA AGRO COMÉRCIO DE MÁQUINAS S/A</div>
                    <div className={css.info}>Rod. PR 317, 7073 - Lote 01/02, Data 001, Quadra 056, Zona 47 - Parque Industrial Mario Bulhões da Fonseca CEP 87.065 - 000</div>
                    <div className={css.info}>Telefone: (44) 3366 - 3000</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}