import css from "../sections/agricultura.module.css"
import { Row, Col, Container } from "reactstrap"
import Link from "next/link"
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Agricultura() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5500,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>
                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-2.png' width={319} height={183}/>
                    <div style={{marginTop: 0}} className={css.nameMachine}>Imperador<br/>3000 e 4000</div>
                    <div className={css.textmachine}>Precisão de aplicação excelente garantida pelas barras centrais.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>A linha de Imperador da Stara é a única no mundo com barras centrais;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Menor desperdício e maior amplitude de velocidade de trabalho com duas linhas de ponta de pulverização, o sistema dupla linha e bico a bico;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Mais homogeneidade nas aplicações com o exclusivo Sistema Recirculante Contínuo, onde a calda se mantém em constante circulação nas tubulações e no reservatório.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-3.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Imperador 3.0</div>
                    <div className={css.textmachine}>O único autopropelido 3 em 1 do mundo.<br/><br/></div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>
                </Row>

                <Row className={css.mobile}>
                    <Slider {...settings}>
                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-1.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Imperador 2000</div>
                    <div className={css.textmachine}>Pulverizador e semeador pneumático num único equipamento.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-2.png' width={319} height={183}/>
                    <div style={{marginTop: 0}} className={css.nameMachine}>Imperador<br/>3000 e 4000</div>
                    <div className={css.textmachine}>Precisão de aplicação excelente garantida pelas barras centrais.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/maquina-3.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Imperador 3.0</div>
                    <div className={css.textmachine}>O único autopropelido 3 em 1 do mundo.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipamento com sistema pneumático que proporciona a semeadura da cultura de cobertura em toda a extensão da barra;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Reservatório em polietileno com dois compartimentos, uma inovação exclusiva da Stara;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Pulverização 58% mais eficiente que o melhor concorrente.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>
                    </Slider>
                </Row>
                <div className={css.machineTitle}>Plantadeiras</div>
                <div className={css.divider}></div>

                <Row className={css.margin}>
                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/cinderela.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Cinderela</div>
                    <div className={css.textmachine}>Homogeneidade do plantio mesmo em terrenos irregulares.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Caixa de sementes suspensa;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Excelente autonomia de trabalho;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Oferece a melhor copiagem do terreno por contar com articulação total de 27°, sendo 17° para cima e 10° para baixo.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/princesa.png' width={319} height={183}/>
                    <div  className={css.nameMachine}>Princesa</div>
                    <div className={css.textmachine}>Articulada, compacta e leve.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Modo de transporte com sistema de articulação com fechamento lateral;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Excelente rendimento operacional;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipada de fábrica com o melhor controlador do mercado, o Topper 5500.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>
                    </Col>

                    <Col className={css.empty}>
                    
                    </Col>
                </Row>

                <Row className={css.mobile}>
                    <Slider {...settings}>
                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/cinderela.png' width={319} height={183}/>
                    <div className={css.nameMachine}>Cinderela</div>
                    <div className={css.textmachine}>Homogeneidade do plantio mesmo em terrenos irregulares.</div>
                    <div className={css.borderCard}>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Caixa de sementes suspensa;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Excelente autonomia de trabalho;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Oferece a melhor copiagem do terreno por contar com articulação total de 27°, sendo 17° para cima e 10° para baixo.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>                    </Col>

                    <Col className={css.column}>
                    <Image className={css.img} src='/imgs/princesa.png' width={319} height={183}/>
                    <div style={{marginTop: 0}} className={css.nameMachine}>Princesa<br/></div>
                    <div className={css.textmachine}>Articulada, compacta e leve.</div>
                    <div className={css.borderCard}>
                    <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Modo de transporte com sistema de articulação com fechamento lateral;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Excelente rendimento operacional;
                        </div>
                        <div className={css.textCard}>
                        <BsCheckCircleFill className={css.icon} style={{marginLeft: -32, marginRight: 10}}/>Equipada de fábrica com o melhor controlador do mercado, o Topper 5500.
                        </div>
                    </div>
                    <Link href="#contato"><a><button className={css.button}>Quero saber mais</button></a></Link>
                    </Col>
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}