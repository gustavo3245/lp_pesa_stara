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
                    <Col sm="5" md="6">
                    <Link href="/"><a><Image className={css.logo} src="/imgs/logo-pesastara.png" width={200} height={50} alt=""/></a></Link>
                    </Col>

                    <Col className={css.col} sm="7" md="6">
                    <Row>
                        <Col>
                        <div>
                            <Link href="#blog"><a className={css.link}>Blog</a></Link>
                            <Link href="#contato"><a className={css.link}>Contato</a></Link>
                        </div>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}