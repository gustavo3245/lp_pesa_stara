import css from "./form.module.css"
import { Row, Col, Container, FormText, Label } from "reactstrap"
import { Input } from "reactstrap";

export default function Form (){
    return(
        <div className={css.bgcolor}>
            <Container>
                <Row>
                    <Col className={css.form}>
                    <div className={css.titleForm}>Entre em contato conosco.</div>
                    <div>
                        <label className={css.label}>Nome completo*:</label>
                    </div>
                    <Input className={css.input} type="text" />
                    <div>
                        <label className={css.label}>E-mail*:</label>
                    </div>
                    <Input className={css.input} type="email"/>
                    <Row>
                        <Col>
                        <div>
                            <label className={css.label}>DDD*</label>
                        </div>
                        <Input className={css.input} type="number"/>
                        </Col>
                        <Col>
                        <div>
                            <label className={css.label}>Telefone*:</label>
                        </div>
                        <Input className={css.input} type="number"/>
                        </Col>
                    </Row>
                    <div>
                        <label className={css.label}>Local de preferência de contato:</label>
                    </div>
                    <select className={css.select}>
                        <option>WhatsApp</option>
                        <option>Ligação</option>
                        <option>E-mail</option>
                    </select>
                    <div style={{textAlign: "center"}}>
                <button className={css.button}>Enviar</button>
                </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}