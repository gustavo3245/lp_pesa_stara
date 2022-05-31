import {Row, Col, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './header.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Header (){
    return(
        <div className={css.bg}>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <Container className={css.header}>
                <Row>
                    <Col xs="6">
                    <Link href="/"><a><Image className={css.logo} src="/imgs/logo-pesastara.png" width={200} height={50} alt=""/></a></Link>
                    </Col>

                    <Col xs="4" className={css.col}>
                        <div>
                            <Link href="#blog"><a className={css.link}>Blog</a></Link>
                        </div>
                    </Col>

                    <Col sm="1" xs="1">
                        <div className={css.col2} style={{textAlign: "right"}}>
                            <Link href="#contato"><a className={css.link}>Contato</a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}