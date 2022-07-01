import css from "./relacionadas.module.css"
import {Row, Col, Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image"
import Link from "next/link"

export default function Relacionadas(){
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
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return(
        <div className={css.bgcolor}>
            <Container>
                <div className={css.titleSection}>Notícias relacionadas</div>
                <Row className="py-5">
                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-1.png' alt="maquina" width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara traz lançamentos para Agrishow 2022</div>
                    <Link href="/post"><a className={css.linkPost}><div className={css.link}>leia mais</div></a></Link>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' alt="maquina" width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <Link href="/post"><a className={css.linkPost}><div className={css.link}>leia mais</div></a></Link>
                    </Col>

                    <Col className={css.card}>
                    <Image className={css.img} src='/imgs/noticia-2.png' alt="maquina" width={319} height={183}/>
                    <div className={css.date}>24/04/2022</div>
                    <div className={css.titlePost}>Stara realiza sua 12ª convenção de concessionárias e revendas</div>
                    <Link href="/post"><a className={css.linkPost}><div className={css.link}>leia mais</div></a></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}