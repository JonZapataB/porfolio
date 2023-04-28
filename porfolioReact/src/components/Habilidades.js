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
                    <p>HTML</p>
                    <p><IoLogoHtml5 /></p>
                </div>
                <div>
                    <p>CSS</p>
                    <p><IoLogoCss3 /></p>
                </div>
                <div>
                    <p>JavaScript</p>
                    <p><IoLogoJavascript /></p>
                </div>
                
                <div>
                    <p>React</p>
                    <p><IoLogoReact /></p>
                </div>
                <div>
                    <p>Node</p>
                    <p><IoLogoNodejs /></p>
                </div>
               {/*  <p>
                    Express
                    
                </p> */}
                <div>
                    <p>MySQL</p>
                    <p><GrMysql /></p>
                </div>
                <div>
                    <p>MongoDB</p>
                    <p><SiMongodb /></p>
                </div>
                <div>
                    <p>Git</p>
                    <p><BsGit /></p>
                </div>
                <div>
                    <p>GitHub</p>
                    <p><IoLogoGithub /></p>
                </div>
            </section>
        </div>
    );
}
export default skills;