import { FaLinkedinIn, FaGithubAlt, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa"

function Contact() {
    return (
        <section id="Contact">
            <div className="container contact-container">
                <a href="#" className="contact-logo">&lt;/&gt;</a>
                <h2>&lt;Contato/&gt;</h2>
                <p>Eu estou sempre aberto à discutir seu projeto<br /> e desenvolver a melhor solução para sua presença online </p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/luiz-r-b27263165/" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://github.com/Lz-Rod" target="_blank"><FaGithubAlt /></a>
                    <a href="mailto:lz.rod.sv@gmail.com"><FaEnvelope /></a>
                    <a href="https://wa.me/5511910783397" target="_blank"><FaWhatsapp /></a>
                    <a href="tel:11910783397"><FaPhone /></a>
                </div>
            </div>
        </section>
    )
}
export default Contact