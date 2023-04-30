import './css/Start.css'
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import foto from '../img/Jonnoche.png'

const start = () => {
    return (
        <div>
            <h1>Jon Zapata</h1>
            <h2>Programador Web</h2>
            <h3>Hola, bienvenidos a mi porfolio personal donde podreis conocer mas sobre mi, mis gustos o mis habilidades como Programador web</h3>
            <img className='fotoStart' src={foto}/>
            <ul className='redes'>
                <li className='instagramStart'>
                    <a href='https://www.instagram.com/jzapatab/' target="_blank">
                        <BsInstagram />
                    </a>
                </li>
                <li className='linkedinStart'>
                    <a href='https://www.linkedin.com/in/jon-zapata-bl%C3%A1zquez-63a09926b/' target="_blank">
                        <BsLinkedin />
                    </a>
                </li>
                <li className='githubStart'>
                    <a href='https://github.com/JonZapataB' target="_blank">
                        <BsGithub />
                    </a>
                </li>
                <li className='twitterStart'>
                    <a href='https://twitter.com/jon_zipi' target='_blank'>
                        <BsTwitter />
                    </a>
                </li>
            </ul>
            <ul className='cv'>
                <li>
                    <a href='./docs/CV_JonZapata.pdf' target='_blank'>
                        Descargar CV
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default start;