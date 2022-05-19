import css from "./form.module.css"
import { Row, Col, Container, FormText, Label } from "reactstrap"
import { Input } from "reactstrap";
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import InputMask from "react-input-mask";
import {useState} from "react";

export default function Form (){
    const [load, setLoad] = useState(false)

    const api = axios.create({
        baseURL: 'https://phpstack-423803-1938873.cloudwaysapps.com/api/integracao/json_pp/'
    });
    const [form, setForm] = useState({
        email: "", telefone: "", name: "", idEmpresa:5, pagina:'form_pesa_stara_contato_lp'
    });
    async function formSubmit(){
        setLoad(true)
        if(form.email === ''||form.telefone === ''|| form.name === '') {
            setLoad(false)
            return  toast.warn('Preencha todos os campos');
        }
        console.log(form)
        const {data: addForm } = await api.post('form_pesa_stara_contato_lp', form);
        if (addForm.success) {
            setLoad(false)
            toast.success(addForm.success,);
            setForm({ email: "", name: "" ,telefone:'', idEmpresa:5, pagina:'form_pesa_stara_contato_lp'});
        }
    }


    return(
        <div className={css.bgcolor}>
            <ToastContainer theme={'colored'}/>
            <Container>
                <Row>
                    <Col className={css.form}>
                    <div className={css.titleForm}>Entre em contato conosco.</div>
                    <div>
                        <label className={css.label}>Nome completo*:</label>
                    </div>
                    <Input   value={form.name}
                             onChange={(val) => setForm({
                                 ...form,
                                 name: val.target.value
                             })}  className={css.input} type="text" />
                    <div>
                        <label className={css.label}>E-mail*:</label>
                    </div>
                    <Input  value={form.email}
                            onChange={(val) => setForm({
                                ...form,
                                email: val.target.value
                            })}  className={css.input} type="email"/>
                    <Row>
                        <Col>
                        <div>
                            <label className={css.label}>Telefone*:</label>
                        </div>
                            <InputMask mask="(99) 99999-9999" value={form.telefone}
                                       onChange={(val) => setForm({
                                           ...form,
                                           telefone: val.target.value
                                       })} type="text" placeholder="(99) 99999-9999" className={`form-control ${css.input}`}/>
                        </Col>
                    </Row>
                   <div hidden={true}>
                       <div>
                           <label className={css.label}>Local de preferência de contato:</label>
                       </div>
                       <select className={css.select}>
                           <option>WhatsApp</option>
                           <option>Ligação</option>
                           <option>E-mail</option>
                       </select>
                   </div>
                    <div style={{textAlign: "center"}}>
                <button  onClick={formSubmit} className={css.button}>Enviar</button>
                        <div className={css.load} style={{marginTop: -50, marginBottom: 20, position: "absolute"}}>
                            {load &&
                            <div className='d-flex align-items-center'>
                               <div>
                                   <img width={35} src="/imgs/loading.svg" alt=""/>
                               </div>
                               <div className={'ms-2'}>
                                   <div className={css.loading}>
                                   Enviando...
                                   </div>
                               </div>
                            </div>
                            }
                        </div>
                </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
