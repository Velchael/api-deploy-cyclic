import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Cursos from './componentes/Cursos';
import './Apprutas.css';
import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Faleconnosco from './componentes/Faleconnosco';
import Modulouno from './componentes/Modulouno';
import Modulodos from './componentes/Modulodos';
import Modulotres from './componentes/Modulotres';
import Moduloquatro from './componentes/Moduloquatro';
/*import App from './ShowProducts.';*/
import Apresentação from './componentes/Apresentação';
import { NoMatch } from './componentes/NoMatch';
import ShowProducts from './componentes/ShowProducts';
/*import Appcarousel from './pages/Appcarousel';<header> <Appcarousel/> </header>*/
function Apprutas() {
  return(
    <BrowserRouter>
      <div>
           <header className="App-header">
            <nav>
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>   
            <p className="App-headerdos"> Instituto NU 
            <Link to= "/" style = { {  textDecoration : 'none' , color : "black" } } > “ Porque você vale muito...” </Link>
            </p>   
             <Link to ="/componentes/Apresentação"></Link>
             <Link to ="/ShowProducts"className="atres" style={{ textDecoration: 'none' }}>Inscrição </Link>
             <Link to="/componentes/Cursos"className="atres"style={{ textDecoration: 'none' }}> Cursos </Link>
             <Link to="/componentes/SobreNos"className="atres"style={{ textDecoration: 'none' }}> Sobre nós </Link>
			       <Link to="/componentes/Faleconnosco"className="atres"style={{ textDecoration: 'none' }}> Fale Conosco </Link>
		        </nav>   
           </header>
      </div> 
      
      <Routes>
        <Route exact path="/componentes/Apresentação/"element={<Apresentação />}/>
        <Route path="ShowProducts"element={<ShowProducts />}/>
        <Route path="/componentes/Cursos"element={<Cursos />}>
            <Route path="modulouno" element={<Modulouno />} />
            <Route path="modulodos" element={<Modulodos />} />
            <Route path="modulotres" element={<Modulotres />} />
            <Route path="moduloquatro" element={<Moduloquatro />} />
          </Route>
        <Route path="/componentes/SobreNos"element={<SobreNos />}/>
        <Route path="/componentes/Faleconnosco"element={<Faleconnosco />}/>
        <Route path="*"element={<NoMatch />}/>
      </Routes>
    </BrowserRouter>
    );
  }

export default Apprutas;
