import css from './sessao1.module.css';
import { Row, Col, Container } from "reactstrap"
import React from "react";
import {FaHome} from "react-icons/fa"
import Image from "next/image"
import Link from 'next/link';

export default function Sessao1() {
    return(
        <div className={css.bgcolor}>
            <style>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&display=swap" rel="stylesheet"/>
</style>
            <Container>
                <Row style={{marginTop: 50}}>
                    <Col md="6">
                        <div className={css.noticias}>
                            Notícias
                        </div>
                    </Col>

                    <Col style={{textAlign: "end"}} md="6">
                        <div className={css.text}><FaHome className={css.icon}/> Página Inicial  Notícias</div>
                    </Col>
                </Row>
                <div className={css.divider1}></div>
                <div className={css.divider2}></div>
                <Row className='py-5'>
                    <Col>
                        <div>
                            <Image className={css.image} src="/imgs/post-1.png" width={503} height={417} alt="post"/>
                        </div>
                    </Col>

                    <Col>
                        <div className={css.date}>24/04/2022</div>
                        <div className={css.titlePost}>Stara traz lançamentos para Agrishow 2022</div>
                        <div className={css.textPost}>
                        A Stara sempre está desenvolvendo máquinas e tecnologias para auxiliarem o produtor. Como já
                         é tradição, traz lançamentos para Agrishow de Ribeirão Preto/SP: a semeadora Guapita e o
                          distribuidor por gravidade Bruttus 25000. Além do lançamento, pela Stara Consórcio, do
                           segundo Grupo de Consórcio para Linha de Plantio. Guapita Com excelente uniformidade de 
                           semeadura para […]
                        </div>

                        <div>
                            <Link href="/post"><a><button className={css.button}>Continue lendo</button></a></Link>
                        </div>
                    </Col>
                </Row>

                <Row className={css.margin}>
                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-1.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara traz lançamentos para Agrishow 2022</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>
                </Row>

                <Row className={css.margin}>
                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-1.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara traz lançamentos para Agrishow 2022</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>
                </Row>

                <Row className={css.margin}>
                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-1.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara traz lançamentos para Agrishow 2022</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183} alt="blog"/>
                    <div className={css.datePost}>24/04/2022</div>
                    <div className={css.post}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}