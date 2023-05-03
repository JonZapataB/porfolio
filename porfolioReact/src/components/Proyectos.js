import './css/Proyectos.css'
import fotoProyect1 from '../img/f1.png'
import fotoProyect2 from '../img/saboresdelmundo.png'
import fotoProyect3 from '../img/eventosBizkaia.png'
import fotoProyect4 from '../img/scraping.png'
import fotoProyect5 from '../img/ecommerce.png'

const proyects = () => {
    return (
        <div className='proyects' id='proyectos'>
        <h1>Proyectos</h1>
        <p>Estos son algunos de los proyectos que he realizado</p>
        <h2 className='tittleProyects'>Proyectos Fronted</h2>
        <div className='container'>
            <div className='card'>
                <img className='fotoProyect1' title='Api' alt='Api'src={fotoProyect1}/>
            </div>
            <div className='card'>
                <img className='fotoProyect2' title='Api' alt='api' src={fotoProyect2}/>
            </div>
            <div className='card'>
                <img className='fotoProyect3' alt='React' src={fotoProyect3}/>
            </div>
        </div>

        {/* <ul className='proyectsListFront'>
            <li>
                <img className='fotoProyect1' title='Api' alt='Api'src={fotoProyect1}/>  
            </li>
            <li>
            <img className='fotoProyect2' title='Api' alt='api' src={fotoProyect2}/>
            </li>
            <li>
            <img className='fotoProyect3' alt='React' src={fotoProyect3}/>
            </li>
        </ul> */}
        <h2 className='tittleProyects'>Proyectos Backend</h2>

        <div className='container'>
            <div className='card'>
                <img className='fotoProyect4' title='Api' alt='Api'src={fotoProyect4}/>
            </div>
            <div className='card'>
                <img className='fotoProyect5' title='Api' alt='api' src={fotoProyect5}/>
            </div>
        </div>
        {/* <ul className='proyectsListBack'>
            <li>
            <img className='fotoProyect4' src={fotoProyect4} alt='Scraping'/>
            </li>
            <li>
            <img className='fotoProyect5' alt='Base de datos' src={fotoProyect5}/>
            </li>
        </ul> */}
        </div>
    );
}
export default proyects;