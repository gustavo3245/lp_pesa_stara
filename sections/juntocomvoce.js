import { Row, Col, Container } from 'reactstrap'
import css from './juntocomvoce.module.css'

export default function Comvoce() {
    return(
        <div className={css.bgbanner}>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
</style>
            <Container>
                <div className={css.title}>Junto com você!</div>
                <Row>
                    <Col md="6">
                        <div className={css.titleSection}>PESA Stara - Junto com você.</div>
                        <div className={css.text}>
                            Uma história que passa para gerações com equipamentos que trazem inovação e tecnologia. A PESA Stara oferece mais do que máquinas. Oferecemos produtividade para famílias que colhem no campo os frutos que descansam nas mesas na cidade. Você é peça chave no caminho da evolução tecnológica dessa grande família agrícola.
                            <br/><br/>
                            Nossa história se desenvolve junto com a sua, somos parceiros para aumentar o seu desempenho, lucro e ajudar o seu negócio crescer mais.
                        </div>
                        <div className={css.textPhrase}>Estamos junto com você. Sempre</div>
                    </Col>

                    <Col md="6"></Col>
                </Row>
            </Container>
        </div>
    )
}