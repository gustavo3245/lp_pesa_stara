import Headerblog from "../blog/header";
import Noticia from "../post/noticia.js"
import Produtos from "../post/produtos.js"
import Relacionadas from "../post/relacionadas.js"
import Form from "../../sections/form.js"
import Footer from "../../components/layout/footer.js"
import Footer2 from "../../components/layout/footer2.js"

export default function Post() {
    return(
        <div>
            <Headerblog/>
            <Noticia/>
            <Produtos/>
            <Relacionadas/>
            <Form/>
            <Footer/>
            <Footer2/>
        </div>
    )
}