import React from "react";
/*import SobreNos from "./SobreNos";*/
import { Link } from 'react-router-dom';
import '../Apprutas.css';
import { useState } from "react";
function Faleconnosco(){
    const[email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    }
    return(
    <nav>
    <ul className="corum"> 
    <li> 
    <div>
      <form>
       <div>
       <h3>Fale Conosco</h3>
       <p>Escreva seus dados e entraremos em contato</p>
         <div>Nome:<input type="text"placeholder="Digite nombre completo" /></div>
         <div>Email: <input type="email" placeholder="Digite o seu e-mail aqui" onChange={(e) =>
          setEmail(e.target.value)} /></div>
         <button className="botao" type="submit" onClick={enviarEmail}>Enviar </button>
         {/* a div abaixo é exibida se userEmail possuir valor*/}
         { userEmail && (<div><p>O e-mail do usuário é: {userEmail}</p></div>) }
         
       </div>
      </form>
    </div>
    </li>
    <li>
      <hr/>
         <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } >[ RETORNAR A PÁGINA INICIAL ] </Link>
    </li>
    </ul>
    </nav>
    )
   }
   export default Faleconnosco