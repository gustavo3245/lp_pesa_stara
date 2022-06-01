import { Row, Col, Container } from 'reactstrap'
import css from './banner.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, } from "react";
import Link from "next/link"
import Image from "next/image"

export default function Banner() {
    
    return(
        <div>
            <video className={css.video} src="/imgs/video.mp4" type="video/mp4" autoPlay muted loop/>
        </div>
    )
}