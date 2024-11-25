import s from './inicio.module.scss'
import imagem1 from '../../assets/card1.png'
import imagem2 from '../../assets/card2.png'
import imagem3 from '../../assets/card3.png'
import imagem4 from '../../assets/card4.png'

export default function Inicio() {
    return (
        <section className={s.inicio}>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                    <section>
                        <img src={imagem1} alt="Imagem representando círculo de quatro pessoas" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
     
                    <section>
                        <img src={imagem2} alt="Imagem representando uma pessoa lendo um livro" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>

                    <section>
                        <img src={imagem3} alt="Imagem representando seis pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>

                    <section>
                        <img src={imagem4} alt="Imagem representando uma balança de igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </section>
    );
}