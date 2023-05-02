import './css/SobreMi.css'
import foto1 from '../img/IMG-20230114-WA0084.jpg'
import foto2 from '../img/IMG-20230113-WA0028.jpg'
import foto3 from '../img/20230116_130538.jpg'
import foto4 from '../img/20220803_194908.jpg'

const aboutMe = () => {
    return (
        <div className='sobreMi' id='sobreMi'>
            <h1>Sobre mi</h1>
            <p>Soy Jon Zapata, un Programador web joven con grandes aptitudes.</p>
            <p>Nacido en Bilbao un dia del año 1999</p>
            <ul className='hobbies'>
                <li className='hobbiesTittle'>Hobbies:</li>
                <li>Futbol</li>
                <li>Videojuegos</li>
                <li>Motor</li>
                <li>Aviacion</li>
                <li>Gimnasio</li>
                <li>Tecnologia</li>
                <li>Series/Pelis</li>
                <li>Vijar</li>
            </ul>
            <section className='fotos'>
                <img className='foto1' src={foto1}/>
                <img className='foto2' src={foto2}/>
                <img className='foto3' src={foto3}/>
                <img className='foto4' src={foto4}/>
            </section>
        </div>
    )
}

export default aboutMe;