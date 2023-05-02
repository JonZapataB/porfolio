import './App.css';
import Start from './components/Start';
import AboutMe from './components/SobreMi';
import Skills from './components/Habilidades';
import Projects from './components/Proyectos';
import Contact from './components/Contacto';
import {HiMenu} from 'react-icons/hi'

/* function seleccionar() {
  const boton = document.querySelector('.barraBoton');
  boton.classList.toggle('seleccionado');
} */

function App() {
  return (
    <div className='porfolio'>
      <ul className='barraInicio'>
        <li className='logo'>JZ</li>
        <li className='hamburguer'>
          <HiMenu />
        </li>
        <li className='barraBoton'>
          <a href='#inicio' /* onClick={seleccionar()} */>INICIO</a></li>
        <li className='barraBoton'>
          <a href='#sobreMi' /* onClick={seleccionar()} */>SOBRE MI</a></li>
        <li className='barraBoton'>
          <a href='#skills' /* onClick={seleccionar()} */>HABILIDADES</a></li>
        <li className='barraBoton'>
          <a href='#proyectos' /* onClick={seleccionar()} */>PROYECTOS</a></li>
        <li className='barraBoton'>
          <a href='#contacto' /* onClick={seleccionar()} */>CONTACTO</a></li>
      </ul>
      <Start />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
