import './css/Contacto.css'
import { BsLinkedin} from 'react-icons/bs';
import { BsGithub} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { BsInstagram} from 'react-icons/bs';


const contact = ()  => {
    return (
        <div>
            <h1>Contacto</h1>
            <p>Si quieres contactar conmigo puedes hacerlo a traves de mis redes sociales o enviandome un correo electronico</p>
            <ul>
                <li>
                    <a href='https://www.instagram.com/jzapatab/' target="_blank">
                        <BsInstagram />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/jon-zapata-bl%C3%A1zquez-63a09926b/' target="_blank">
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/JonZapataB' target="_blank">
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/jon_zipi' target="_blank">
                        <BsTwitter />
                    </a>
                </li>
                <li>
                    <a href='mailto:jonzapatab@gmail.com'>
                        Enviar correo
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default contact;