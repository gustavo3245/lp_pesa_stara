import { Row, Col, Container } from 'reactstrap'
import css from './banner.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, } from "react";
import Link from "next/link"
import Image from "next/image"

export default function Banner() {
    
    return(
        <div>
            <video className={css.video} src="/imgs/video.mp4" type="video/mp4" autoPlay muted loop>
            <Row className={css.bgGradient}>
                    <Container>
                        <Row className='py-4'>
                            <Col className={css.colLogo} xs="6">
                             <Link href="/"><a><Image src="/imgs/logo-pesastara.png" width={200} height={50} alt=""/></a></Link>
                            </Col>

                            <Col xs="4" className={css.col}>
                                <div>
                                    <Link href="#blog"><a className={css.link}>Blog</a></Link>
                                </div>
                            </Col>

                            <Col xs="1">
                             <div className={css.col2} style={{textAlign: 'end'}}>
                                <Link href="#contato"><a className={css.link}>Contato</a></Link>
                             </div>
                          </Col>
                        </Row>
                    </Container>
                </Row>
                </video>
        </div>
    )
}