import { Row, Col, Container } from 'reactstrap'
import css from './banner.module.css'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Bootstrap from 'bootstrap';

export default function Banner() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    return(
        <div>
        <div className={css.bgbanner}>
            <div style={{textAlign: "center"}}>
                <button
                onClick={toggleModal}
                className={css.btnModal}
                ><BsFillPlayCircleFill className={css.icon}/></button>
            </div>
        </div>

        {modal && (
<div className={css.modal}>
            <div
            onClick={toggleModal}
            className={css.overlay}>
                <div className={css.modalContent}>
                <iframe className={css.video} width="560" height="315" src="https://www.youtube.com/embed/LIYupDbUJME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div
                    className={css.closeModal}
                    onClick={toggleModal}
                    ><IoMdClose className={css.closeIcon} /></div>
                </div>
            </div>
        </div>
        )}
        
        </div>
    )
}