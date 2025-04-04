import iconeLivro from '../../assets/livroForm.png';
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'



export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturarTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImage_url(e.target.value)
    }

    const enviarDados = async()=>{

        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-para-livrosvnw-1.onrender.com/doar",dadosParaEnviar)
        alert("Obrigado, seu livro foi cadastrado com sucessso!")
    }


    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
            <input type="text" placeholder='Título' onChange={capturarTitulo} required/>
            <input type="text" placeholder='Categoria' onChange={capturaCategoria} required/>
            <input type="text" placeholder='Autor' onChange={capturaAutor} required/>
            <input type="url" placeholder='Link da Imagem' onChange={capturaImagem} required/>
            <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados}/>
            </form>
        </section>
    )
}