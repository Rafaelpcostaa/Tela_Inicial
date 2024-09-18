import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function MenuFinal(){
    return(
        <footer>
        <div class="footer-container">
            <div class="social">
                <h3>Siga-nos nas redes</h3>
                <a href="https://www.facebook.com/">  <FaFacebook size={30} color="blue" /> </a>
                <a href="https://instagram.com"> <FaInstagram size={30} color="#E4405F"/>  </a>
                <a href="https://linkedin.com"> <FaLinkedin size={30} color="#0077B5"/> </a>
            </div>

            <div class="contact">
                <h3>Fale conosco</h3>
                <p>📞 +55 98765-9870</p>
                <p>✉️ ecofinder@email.com</p>
            </div>

            <div class="quote">
                <p>“Obrigação de cuidar do nosso planeta. Volte sempre para continuar a mudança!” - Equipe EcoFinder</p>
                <p>&copy; EcoFinder - 2024</p>
            </div>
        </div>
    </footer>
    )
}

export default MenuFinal;