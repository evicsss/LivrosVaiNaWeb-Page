import s from './footer.module.scss'
import logo1 from '../../assets/facebook.png'
import logo2 from '../../assets/instagram.png'
import logo3 from '../../assets/linkedin.png'
import logo4 from '../../assets/twitter.png'
import logo5 from '../../assets/youtube.png'


export default function Footer() {
    return(
        <footer className={s.footer}>
            <section className={s.contatos}>
                <p>1234 - 5678</p>
                <nav>
                    <a href=""><img src={logo1} alt="Imagem representando a logo da rede social facebook" /></a>
                    <a href=""><img src={logo2} alt="Imagem representando a logo da rede social instagram" /></a>
                    <a href=""><img src={logo3} alt="Imagem representando a logo da rede social linkedin" /></a>
                    <a href=""><img src={logo4} alt="Imagem representando a logo da rede social twitter" /></a>
                    <a href=""><img src={logo5} alt="Imagem representando a logo da rede social youtube" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p> &copy; Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
   
    )
}