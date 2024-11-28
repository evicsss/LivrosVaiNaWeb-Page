import capaLivro from '../../assets/Livro.png';
import s from './livrosDoados.module.scss';

export default function LivrosDoados(){
    return(
        <section className={s.livrosDoadosSection}>
            <p>Livros Doados</p>

            <div className={s.livroContainer}>
                <section><img src={capaLivro} alt="Imagem representando o livro o Protagonista" className={s.capaLivro} />
                <h2>O Protagonista</h2>
                <h2>Susanne Andrade</h2>
                <h2>Gênero: Ficção</h2>
                </section>
            </div>
        </section>
    )
}
