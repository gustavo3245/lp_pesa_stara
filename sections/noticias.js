import css from "./noticias.module.css";
import { Row, Col, Container } from 'reactstrap';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link"

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
};
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

                <Row className={css.mobile}>
                    <Slider {...settings}>
                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-1.png' width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara traz lançamentos para <br/> Agrishow 2022</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara realiza sua 12ª convenção de <br/> concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara realiza sua 12ª convenção de <br/>concessionárias e revendas</div>
                    <div className={css.link}>leia mais</div>
                    </Col>
                    </Slider>
                </Row>

                <div style={{textAlign: "center"}}>
                <Link href="/blog"><a><button className={css.button}>Ver todas as notícias</button></a></Link>
                </div>
            </Container>
        </div>
    )
}