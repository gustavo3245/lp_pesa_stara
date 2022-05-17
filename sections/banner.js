import { Row, Col, Container } from 'reactstrap'
import css from './banner.module.css'
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function Banner() {
    return(
        <div className={css.bgbanner}>
            <div style={{textAlign: "center"}}>
                <BsFillPlayCircleFill className={css.icon}/>
            </div>
        </div>
    )
}