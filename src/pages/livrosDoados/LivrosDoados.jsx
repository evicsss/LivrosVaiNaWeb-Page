import capaJef from '../../assets/livroJEF.jpg'
import livroGeni from '../../assets/livroGeni.jpg'
import livroCon from '../../assets/livroCon.jpg'
import livroLaz from '../../assets/livroLaz.jpg'
import livroMan from '../../assets/livroMan.jpg'
import livroSte from '../../assets/livroSte.jpg'
import livroMacu from '../../assets/livroMacu.jpg'
import livroPeq from '../../assets/livroPeq.jpg'
import s from './livrosDoados.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'



export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        async function buscarLivros() {
            try {
                const resposta = await axios.get("https://api-para-livrosvnw-1.onrender.com/livros")
                setLivros(resposta.data)
            } catch (erro) {
                console.error("Erro ao buscar livros:", erro)
            }
        }

        buscarLivros()
    }, [])

    return (
        <section className={s.livrosDoadosSection}>
            <header>
                <h1 className={s.titulo}>Livros Doados</h1>
            </header>

            <div className={s.livrosContainer}> 
                <section className={s.livroContainer}> 
                    <img 
                        src={capaJef} 
                        alt="Capa do livro O Avesso da Pele, escrito por Jeferson Tenório" 
                        className={s.capaLivro} 
                    />
                    <h2>O Avesso da Pele</h2>
                    <p>Jeferson Tenório</p>
                    <p><strong>Gênero:</strong> Ficção Urbana</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroGeni} 
                        alt="Imagem representando o livro Descolonizando afetos: Experimentações sobre outras formas de amar por Geni Nuñez" 
                        className={s.capaLivro} 
                    />
                    <h2>Descolonizando afetos: Experimentações sobre outras formas de amar</h2>
                    <p>Geni Nuñez</p>
                    <p><strong>Gênero:</strong> Biografia</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroCon} 
                        alt="Capa do livro Insubmissas lágrimas de mulheres: contos, escrito por Conceição Evaristo" 
                        className={s.capaLivro} 
                    />
                    <h2>Insubmissas lágrimas de mulheres: contos </h2>
                    <p> Conceição Evaristo </p>
                    <p><strong>Gênero:</strong> Ficção</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroLaz} 
                        alt="Capa do livro Na Minha Pele, escrito por Lázaro Ramos" 
                        className={s.capaLivro} 
                    />
                    <h2>Na Minha Pele</h2>
                    <p>Lázaro Ramos</p>
                    <p><strong>Gênero:</strong>  Biografia, Autobiografia</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroMacu} 
                        alt="Capa do livro Macunaíma, escrito por Mário de Andrade" 
                        className={s.capaLivro} 
                    />
                    <h2>Macunaíma</h2>
                    <p>Mário de Andrade</p>
                    <p><strong>Gênero:</strong>  Romance, Ficção, Humor</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroSte} 
                        alt="Capa do livro Uma Breve História do Tempo, escrito por Stephen Hawking" 
                        className={s.capaLivro} 
                    />
                    <h2>Uma Breve História do Tempo</h2>
                    <p>Stephen Hawking</p>
                    <p><strong>Gênero:</strong>  Ciência e Filosofia</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroPeq} 
                        alt="Capa do livro O Pequeno Príncipe, escrito por Antoine de Saint-Exupéry" 
                        className={s.capaLivro} 
                    />
                    <h2>O Pequeno Príncipe</h2>
                    <p>Antoine de Saint-Exupéry</p>
                    <p><strong>Gênero:</strong>  Literatura infantil</p>
                </section>

                <section className={s.livroContainer}>
                    <img 
                        src={livroMan} 
                        alt="Capa do livro Longa Caminhada até a Liberdade, escrito por Nelson Mandela" 
                        className={s.capaLivro} 
                    />
                    <h2>Longa Caminhada até a Liberdade</h2>
                    <p>Nelson Mandela</p>
                    <p><strong>Gênero:</strong> Autobiografia</p>
                </section>
                {livros.map((livro) => (
        <section key={livro.id} className={s.livroContainer}>
            <img
            src={livro.imagem_url || 'https://via.placeholder.com/150'}
            alt={`Capa do livro ${livro.titulo}`}
            className={s.capaLivro}
/>
            <h2>{livro.titulo}</h2>
            <p>{livro.autor}</p>
            <p><strong>Gênero:</strong> {livro.categoria}</p>
        </section>
    ))}
        </div>           
        </section>
    );
}
