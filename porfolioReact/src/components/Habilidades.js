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
        <div className='skills' id='skills'>
            <h1>Habilidades</h1>
            <section className='skillsList'>
                <div className='divHTML'>
                    <span className='skillsName'>HTML</span>
                    <p className='skillsLogo'><IoLogoHtml5 /></p>
                </div>
                <div className='divCSS'>
                    <span className='skillsName'>CSS</span>
                    <p className='skillsLogo'><IoLogoCss3 /></p>
                </div>
                <div className='divJS'>
                    <span className='skillsName'>JavaScript</span>
                    <p className='skillsLogo'><IoLogoJavascript /></p>
                </div>
                
                <div className='divREACT'>
                    <p className='skillsName'>React</p>
                    <p className='skillsLogo'><IoLogoReact /></p>
                </div>
                <div className='divNODE'>
                    <span className='skillsName'>Node</span>
                    <p className='skillsLogo'><IoLogoNodejs /></p>
                </div>
               {/*  <p>
                    Express
                    
                </p> */}
                <div className='divMYSQL'>
                    <span className='skillsName'>MySQL</span>
                    <p className='skillsLogo'><GrMysql /></p>
                </div>
                <div className='divMONGODB'>
                    <span className='skillsName'>MongoDB</span>
                    <p className='skillsLogo'><SiMongodb /></p>
                </div>
                <div className='divGIT'>
                    <span className='skillsName'>Git</span>
                    <p className='skillsLogo'><BsGit /></p>
                </div>
                <div className='divGITHUB'>
                    <span className='skillsName'>GitHub</span>
                    <p className='skillsLogo'><IoLogoGithub /></p>
                </div>
            </section>
        </div>
    );
}
export default skills;