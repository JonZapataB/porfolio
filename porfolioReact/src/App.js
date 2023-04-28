import './App.css';
import Start from './components/Start';
import AboutMe from './components/SobreMi';
import Skills from './components/Habilidades';
import Projects from './components/Proyectos';
import Contact from './components/Contacto';

/* function seleccionar() {
  const boton = document.querySelector('.barraBoton');
  boton.classList.toggle('seleccionado');
} */

function App() {
  return (
    <div className='porfolio'>
      <ul className='barraInicio'>
        <li className='logo'>JZ</li>
        <li className='barraBoton'>
          <a href='#Start.js' /* onClick={seleccionar()} */>INICIO</a></li>
        <li className='barraBoton'>
          <a href='Sobremi.js' /* onClick={seleccionar()} */>SOBRE MI</a></li>
        <li className='barraBoton'>
          <a href='Habilidades.js' /* onClick={seleccionar()} */>HABILIDADES</a></li>
        <li className='barraBoton'>
          <a href='Proyecyos.js' /* onClick={seleccionar()} */>PROYECTOS</a></li>
        <li className='barraBoton'>
          <a href='Contacto.js' /* onClick={seleccionar()} */>CONTACTO</a></li>
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
