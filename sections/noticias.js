import css from "./noticias.module.css";
import { Row, Col, Container } from 'reactstrap';
import Image from "next/image";

export default function Noticias () {
    return(
        <div id="blog" className={css.bgcolor}>
            <Container>
            <div className={css.titleSection}>Notícias</div>
                <div className={css.divider}></div>
                <Row className={css.margin}>
                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-1.png' width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara traz lançamentos para Agrishow 2022</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>
                </Row>

                <div style={{textAlign: "center"}}>
                <button className={css.button}>Ver todas as notícias</button>
                </div>
            </Container>
        </div>
    )
}