import css from "../sections/agricultura.module.css"
import { Row, Col, Container } from "reactstrap"
import Link from "next/link"
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Agricultura() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className={css.bgcolor}>
            <Container>
                <div className={css.titleSection}><b>Agricultura de precisão </b>é com a PESA Stara</div>
                <div className={css.machineTitle}>Pulverizadores</div>
                <div className={css.divider}></div>

                <Row className={css.margin}>
                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-1.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Imperador 2000</div>
                    <div className={css.textmachine}>Pulverizador e semeador pneumático num único equipamento.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <button className={css.button}>Quero saber mais</button>
                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-2.png' width={319} height={183}/>
                    <div style={{marginTop: 0}} className={css.nameMachine}>Imperador<br/>3000 e 4000</div>
                    <div className={css.textmachine}>Precisão de aplicação excelente garantida pelas barras centrais.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <button className={css.button}>Quero saber mais</button>
                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-3.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Imperador 3.0</div>
                    <div className={css.textmachine}>O único autopropelido 3 em 1 do mundo.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <button className={css.button}>Quero saber mais</button>
                    </Col>
                </Row>
                <div className={css.machineTitle}>Plantadeiras</div>
                <div className={css.divider}></div>

                <Row className={css.margin}>
                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-1.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Imperador 2000</div>
                    <div className={css.textmachine}>Pulverizador e semeador pneumático num único equipamento.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <button className={css.button}>Quero saber mais</button>
                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-2.png' width={319} height={183}/>
                    <div style={{marginTop: 0}} className={css.nameMachine}>Imperador<br/>3000 e 4000</div>
                    <div className={css.textmachine}>Precisão de aplicação excelente garantida pelas barras centrais.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <button className={css.button}>Quero saber mais</button>
                    </Col>

                    <Col className={css.empty}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}