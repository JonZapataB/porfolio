import './css/Contacto.css'
import { BsLinkedin} from 'react-icons/bs';
import { BsGithub} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { BsInstagram} from 'react-icons/bs';
import {MdOutlineAlternateEmail} from 'react-icons/md';


const contact = ()  => {
    return (
        <div className='contact' id='contacto'>
            <h1>Contacto</h1>
            <p>Si quieres contactar conmigo puedes hacerlo a traves de mis redes sociales, por correo o a traves de la pagina de contacto</p>
            <ul className='media'>
                <li className='icon instagramStart'>
                    <a href='https://www.instagram.com/jzapatab/' target="_blank">
                        <BsInstagram />
                    </a>
                </li>
                <li className='icon linkedinStart'>
                    <a href='https://www.linkedin.com/in/jon-zapata-bl%C3%A1zquez-63a09926b/' target="_blank">
                        <BsLinkedin />
                    </a>
                </li>
                <li className='icon githubStart'>
                    <a href='https://github.com/JonZapataB' target="_blank">
                        <BsGithub />
                    </a>
                </li>
                <li className='icon twitterStart'>
                    <a href='https://twitter.com/jon_zipi' target="_blank">
                        <BsTwitter />
                    </a>
                </li>
                <li className='icon email'>
                    <a href='mailto:jonzapatab@gmail.com'>
                        <MdOutlineAlternateEmail />
                    </a>
                </li>
            </ul>
            <form action="send.php" method="post" name="contactoForm" id ="contactoForm">
                <section className='datosContact'>
                    <label className='textName' for="fname">Nombre:</label> 
                    <br></br>
                    <input name='name' className='inputName' type="text" id="fname"  placeholder="Tu nombre.."></input>
                    <br></br>
                    <label className='textSecondName' for="lname">Apellido:</label>
                    <br></br>
                    <input  name='apellido' className='inputSecondName' type="text" id="lname" placeholder="Tu apellido.."></input>
                    <br></br>
                    <label className='textEmail' for="email">Email:</label>
                    <br></br>
                    <input  name='email' className='inputEmail' type="email" id="email"  placeholder="Tu email.."></input>
                    <br></br>
                </section>
                <section className='message'>
                    <label className='textMessage' for="subject">Asunto:</label>
                    <br></br>
                    <textarea name='mensaje'className='inputMessage' id="subject" placeholder="Escribe algo.." style={{height:'200px'}}></textarea>
                    <br></br>
                    <input className='send' type="submit" value="Enviar"></input>
                </section>
            </form> 
        </div>
    )
}
export default contact;