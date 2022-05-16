import {Row, Col, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './header.module.css'
import Link from "next/link";
import Image from "next/image";
import HeadSite from "../_head";

export default function Header (){
    return(
        <div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
</style>
            <Container className={css.header}>
                <Row>
                    <Col md="6">
                    <Image src="/imgs/logo-pesastara.png" width={200} height={50} alt=""/>
                    </Col>

                    <Col className={css.col} md="6">
                    <Row>
                        <Col>
                        <div>
                            <Link href="#"><a className={css.link}>Blog</a></Link>
                            <Link href="#"><a className={css.link}>Contato</a></Link>
                        </div>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}