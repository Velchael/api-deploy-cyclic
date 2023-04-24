import React from 'react';
import { Link, Outlet} from 'react-router-dom';
const Cursos = () => {
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Cursos Instituto NU</h3>  
            <nav className="oldos_modulo">
             <Link to="/componentes/Cursos/Modulouno"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 1 </Link>
             <Link to="/componentes/Cursos/Modulodos"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 2 </Link>
             <Link to="/componentes/Cursos/Modulotres"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 3 </Link>
             <Link to="/componentes/Cursos/Moduloquatro"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 4</Link>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Cursos;