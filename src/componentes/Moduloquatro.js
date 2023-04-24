import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Moduloquatro(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>

          <h1>Módulo 4</h1>
            <h2>Ciência da computação</h2>
            <h3> O que vou aprender?</h3>
            <p>Python é uma linguagem popular nas áreas da tecnologia relacionadas à análise, pesquisa e coleta de dados, além das aplicações de inteligência artificial. O módulo tem como foco o aprendizado da linguagem, através da aplicação de técnicas de algoritmos e estrutura de dados
            </p>
            <h4>O que você será capaz de fazer no final do módulo?</h4> 
            <p>Ao final deste módulo, a pessoa estudante será capaz de usar a linguagem Python para construir algoritmos que permitem, por exemplo, coletar dados de qualquer página na Web, criar programas básicos e fazer automação de tarefas 
        </p>
        <h5>Habilidades técnicas ensinadas:</h5>
        <p>
            •Python
            •Algoritmos
            •Estrutura de Dados
            •Raspagem de Dados

        </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}