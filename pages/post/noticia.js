import css from './noticia.module.css'
import { Row, Col, Container } from "reactstrap"
import React from "react";
import Image from "next/image"
import Link from 'next/link';
import {FaHome} from "react-icons/fa"
import {AiTwotonePrinter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaLink} from "react-icons/fa"
import {FiChevronsLeft} from "react-icons/fi"
import {ImWhatsapp} from "react-icons/im"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Post(){
    return(
        <div>
        <div className={css.bgcolor}>
            <Container>
            <Row className='py-3'>
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
                
                <Row className='py-4'>
                    <Col>
                        <div className={css.date}>24/04/2022</div>
                        <div className={css.title}><b>Syncro para <br/>distribuição:</b><br/> mais planejamento e economia na sua <br/>lavoura</div>
                    </Col>

                    <Col>
                        <Image src="/imgs/img-post-aberto.png" width={503} height={345} />
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row className="py-5">
                    <Col md="8">
                        <div className={css.textPost}>
                            Com o Syncro, uma tecnologia exclusiva da Stara, é possível sincronizar até quatro máquinas de mesma função para trabalharem no mesmo talhão. Além de estar disponível para linha de plantio e pulverizadores autopropelidos da Stara, também pode ser utilizado nos distribuidores autopropelidos.<br/><br/>

                            O Syncro para distribuição proporciona um melhor planejamen­to operacional facilitando a logística de abastecimento de fertilizantes, reduzin­do o tempo e o combustível necessário. Além disso, os distribuidores autopropelidos contam com o sistema de Comporta Dupla que permite o fechamento de um dos lados do reservatório evitando a distribuição nas áreas já aplicadas e resultando em uma economia de até 2,58% de fertilizantes, reduzindo o transpasse.<br/><br/>

                            O Grupo Vale do Verde, em Sinop/MT, adquiriu o Syncro para distribuição que será utilizado em sete Hércules 6.0. “Utilizamos de dois a três distribuidores na mesma área. Com o Syncro buscamos realizar as aplicações com precisão e da melhor maneira, eliminando as falhas de comunicação entre os operadores e evitando o transpasse”, destaca um dos proprietários do grupo, Fernando Prante.<br/><br/>

                            <b>Syncro. Sincronize suas máquinas. Multiplique seus resultados.</b>
                        </div>
                        <div>
                            <Row>
                                <div className={css.icones}>
                                    <FiChevronsLeft/>Voltar 
                                    <AiTwotonePrinter className={css.icon2}/>
                                     <FaFacebookF className={css.icon2}/> 
                                     <ImWhatsapp className={css.icon2}/>
                                     <FaLinkedinIn className={css.icon2}/> 
                                     <FaLink className={css.icon2}/></div>
                            </Row>
                        </div>
                    </Col>

                    <Col>
                        <div className={css.cardImg}>
                        <div>
                            <Image src="/imgs/img2-post.png" width={309} height={421} alt=""/>
                        </div>
                        <div className={css.imgDescription}>Lorem ipsum site damet</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}