import css from "./footer.module.css"
import { Row, Col, Container } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer () {
    return(
        <div className={css.bgcolor}>
            <Container>
                <Row style={{marginTop: -100}}>
                    <Col></Col>
                    <Col md="4">
                    <Image src="/imgs/maq-footer-1.png" width={525} height={323} alt="maq-footer"/>
                    </Col>
                    <Col md="4">
                    <Image src="/imgs/maq-footer-2.png" width={325} height={223} alt="maq-footer"/>
                    </Col>
                    <Col></Col>
                </Row>
                <Row style={{marginTop: 50}}>
                    <Col>
                    <div className={css.fraseFooter}>Junto <br/> com <br/> você!</div>
                    </Col>
                    <Col>
                    <Image src="/imgs/logo-footer.png" width={217} height={58}/>
                    </Col>
                    <Col>
                    <div className={css.email}>www.pesastara.com.br</div>
                    <div className={css.social}><FaInstagram className={css.icon}/>@pesastara</div>
                    <div className={css.social}><FaFacebookF className={css.icon}/>/pesastara</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}