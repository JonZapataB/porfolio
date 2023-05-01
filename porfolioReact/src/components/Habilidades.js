import './css/Habilidades.css'
import {IoLogoHtml5} from 'react-icons/io5'
import {IoLogoCss3} from 'react-icons/io5'
import {IoLogoJavascript} from 'react-icons/io5'
import {IoLogoReact} from 'react-icons/io5'
import {IoLogoNodejs} from 'react-icons/io5'
import {GrMysql} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io5'


const skills = () => {
    return (
        <div className='skills'>
            <h1>Habilidades</h1>
            <section className='skillsList'>
                <div>
                    <p className='skillsName'>HTML</p>
                    <p className='skillsLogo'><IoLogoHtml5 /></p>
                </div>
                <div>
                    <p className='skillsName'>CSS</p>
                    <p className='skillsLogo'><IoLogoCss3 /></p>
                </div>
                <div>
                    <p className='skillsName'>JavaScript</p>
                    <p className='skillsLogo'><IoLogoJavascript /></p>
                </div>
                
                <div>
                    <p className='skillsName'>React</p>
                    <p className='skillsLogo'><IoLogoReact /></p>
                </div>
                <div>
                    <p className='skillsName'>Node</p>
                    <p className='skillsLogo'><IoLogoNodejs /></p>
                </div>
               {/*  <p>
                    Express
                    
                </p> */}
                <div>
                    <p className='skillsName'>MySQL</p>
                    <p className='skillsLogo'><GrMysql /></p>
                </div>
                <div>
                    <p className='skillsName'>MongoDB</p>
                    <p className='skillsLogo'><SiMongodb /></p>
                </div>
                <div>
                    <p className='skillsName'>Git</p>
                    <p className='skillsLogo'><BsGit /></p>
                </div>
                <div>
                    <p className='skillsName'>GitHub</p>
                    <p className='skillsLogo'><IoLogoGithub /></p>
                </div>
            </section>
        </div>
    );
}
export default skills;