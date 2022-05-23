import css from "./produtos.module.css"
import {Row, Col, Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image"

export default function Produtos(){
    return(
        <div>
            <Container>
                <Row>
                    <div className={css.titleSection}>Produtos relacionados</div>
                    <div className={css.divider}></div>
                </Row>

                <Row className="py-5">
                    <Col className={css.card}>
                    <div className={css.border}>
                        <Image src="/imgs/maquina-blog-1.png" width={327} height={187}/>
                        </div>

                        <div className={css.nomeMaquina}>
                            Princesa
                        </div>
                        <div className={css.btnSaiba}>
                            saiba mais
                        </div>
                    </Col>

                    <Col className={css.card}>
                    <div className={css.border}>
                        <Image className={css.img} src="/imgs/maquina-blog-2.png" width={327} height={187}/>
                        </div>

                        <div className={css.nomeMaquina}>
                            Imperador 3.000
                        </div>
                        <div className={css.btnSaiba}>
                            saiba mais
                        </div>
                    </Col>

                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}