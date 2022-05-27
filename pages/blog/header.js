import css from './header.module.css'
import { Row, Col, Container } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from "next/image"

export default function Headerblog(){
    return(
        <div>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <Container>
                <Row className={css.header}>
                    <Col xs="6">
                    <Link href="/"><a><Image className={css.logo} src="/imgs/logo-pesastara.png" alt="logo" width={200} height={50}/></a></Link>
                    </Col>

                    <Col style={{marginTop: 15}} xs="4" className={css.col}>
                        <div>
                            <Link href="/#blog"><a className={css.link}>Blog</a></Link>
                        </div>
                    </Col>

                    <Col sm="1" xs="1">
                        <div className={css.col2} style={{textAlign: "right"}}>
                            <Link href="/#contato"><a className={css.link}>Contato</a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={css.divider1}></div>
            <div className={css.divider2}></div>
        </div>
    )
}