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
                <Row className={css.rowMaq} style={{marginTop: -100}}>
                    <Col></Col>
                    <Col className={css.image} sm="2" md="4">
                    <Image src="/imgs/maq-footer-1.png" width={525} height={323} alt="maq-footer"/>
                    </Col>
                    <Col className={css.image} sm="2" md="4">
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
                    <div className={css.email}><Link href="https://www.pesastara.com.br"><a className={css.link} target="_blank">www.pesastara.com.br</a></Link></div>
                    <div className={css.social}><Link href="https://www.instagram.com/pesastara/"><a style={{color: "white"}} className={css.link} target="_blank"><FaInstagram className={css.icon}/>@pesastara</a></Link></div>
                    <div className={css.social}><Link href="https://pt-br.facebook.com/PesaStara/"><a style={{color: "white"}} className={css.link} target="_blank"><FaFacebookF className={css.icon}/>/pesastara</a></Link></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}