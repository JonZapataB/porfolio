import './css/Proyectos.css'

const proyects = () => {
    return (
        <div>
        <h1>Proyectos</h1>
        <p>Estos son algunos de los proyectos que he realizado</p>
        <h2 className='tittleProyects'>Proyectos Fronted</h2>
        <ul className='ProyectsList'>
            <li>Proyecto 1</li>
            <li>Proyecto 2</li>
            <li>Proyecto 3</li>
        </ul>
        <h2 className='tittleProyects'>Proyectos Backend</h2>
        <ul className='ProyectsList'>
            <li>Proyecto 1</li>
            <li>Proyecto 2</li>
        </ul>
        </div>
    );
}
export default proyects;