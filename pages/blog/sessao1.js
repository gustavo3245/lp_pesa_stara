import css from './sessao1.module.css';
import { Row, Col, Container } from "reactstrap"
import React from "react";
import {FaHome} from "react-icons/fa"
import Image from "next/image"

export default function Sessao1() {
    return(
        <div className={css.bgcolor}>
            <Container>
                <Row>
                    <Col md="6">
                        <div className={css.text}>
                            Notícias
                        </div>
                    </Col>

                    <Col md="6">
                        <div className={css.text}><FaHome className={css.icon}/> Página Inicial Notícias</div>
                    </Col>
                </Row>
                <div className={css.divider1}></div>
                <div className={css.divider2}></div>
                <Row>
                    <Col>
                        <div>
                            <Image className={css.image} src="/imgs/post-1.png" width={503} height={417}/>
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
                            <button className={css.button}>Continue lendo</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}