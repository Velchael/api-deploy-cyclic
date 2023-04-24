import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Modulodos(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
        <h1>Módulo 2</h1>
            <h2>Desenvolvimento Front-end</h2>
            <h3> O que vou aprender?</h3>
            <p> O módulo vai concentrar o aprendizado nas três linguagens que permitem um site ter funcionalidades: HTML (responsável por estruturar uma página), CSS (linguagem de cores e estilos) e o Javascript (que traz o dinamismo e vida para páginas da web). As aulas cobrem o aprendizado essencial para aprender a construir aplicações.
            </p>
            <h4>O que você será capaz de fazer no final do módulo?</h4> 
            <p>Projetar, criar e dar vida às páginas de um site ou aplicativo como uma pessoa desenvolvedora ou programadora. Você terá a compreensão dos princípios do front-end (a interface gráfica do usuário em um site), além de escrever os códigos para montar projetos interativos do zero. 
           </p>
        <h5>Habilidades técnicas ensinadas:</h5>
       <p>
       •HTML
       •CSS
       •Javascript
       •React e Testes Unitários
      </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}