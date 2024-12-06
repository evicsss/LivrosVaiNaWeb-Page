import s from './footer.module.scss'
import logoFace from '../../assets/facebook.png'
import logoInsta from '../../assets/instagram.png'
import logoLink from '../../assets/linkedin.png'
import logoTT from '../../assets/twitter.png'
import logoYou from '../../assets/youtube.png'


export default function Footer() {
    return(
        <footer className={s.footer}>
            <section className={s.contatos}>
                <p>1234 - 5678</p>
                <nav>
                    <a href=""><img src={logoFace} alt="Imagem representando a logo da rede social facebook" /></a>
                    <a href=""><img src={logoInsta} alt="Imagem representando a logo da rede social instagram" /></a>
                    <a href="https://www.linkedin.com/in/evilaoliveira/" target="_blank"><img src={logoLink} alt="Imagem representando a logo da rede social linkedin" /></a>
                    <a href=""><img src={logoTT} alt="Imagem representando a logo da rede social twitter" /></a>
                    <a href=""><img src={logoYou} alt="Imagem representando a logo da rede social youtube" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p> &copy; Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
   
    )
}