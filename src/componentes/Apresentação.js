import React from "react";
/*import './Cardanimais.css';*/

import{Link} from 'react-router-dom';
//criar a classe com o nome Headers*/

/*import '../App.css';*/
export default function Apresentação(){
   return ( 
  <div>
  <form className="presenta_cssum">
  
   <div>
      <h3>Quem somos?</h3>
            <p>Somos a gran Familia TOTIpet</p>
            <p>Te ofrecemos Alimentos de cualidade</p>
            <p>Serviços e dicas para o cuidao de seu Gato ou Cachorro</p>
            <p>Siga-nos em nossas redes sociais</p>
            <p>Facebook...Instagran...Yootube</p>               
            <Link to="/Apresentação"style={{ textDecoration: 'none', color: 'white' }}>..[ RETORNAR A PÁGINA INICIAL ]..</Link>
   </div>
  </form>
  </div>


    ) 
}