import logo from './logo.svg';
import './App.css';
import Start from './components/Start';
import AboutMe from './components/SobreMi';

function App() {
  return (
    <div>
      <ul className='barraInicio'>
        <li className='logo'>JZ</li>
        <li className='barraBoton'>INICIO</li>
        <li className='barraBoton'>SOBRE MI</li>
        <li className='barraBoton'>HABILIDADES</li>
        <li className='barraBoton'>PROYECTOS</li>
        <li className='barraBoton'>CONTACTO</li>
      </ul>
      <Start />
      <AboutMe/>
    </div>
  );
}

export default App;
