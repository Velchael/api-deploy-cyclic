import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Modulouno(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
                 <h1>Módulo 1</h1>
            <h2>Fundamentos do Desenvolvimento Web</h2>
            <h3> O que vou aprender?</h3>
            <p>Você vai explorar os princípios da Internet, da lógica de programação e criar códigos usando as linguagens mais requisitadas pelo mercado. Neste 1º módulo, ainda vai aprender a usar as principais ferramentas que programadores utilizam diariamente para a construção e implementação de projetos digitais.
            </p>
            <h4>O que você será capaz de fazer no final do módulo?</h4>
            <p>Você será capaz de entender como uma pessoa programadora trabalha, desenvolvendo o raciocínio aplicado à formulação e resolução de problemas computacionais. Ainda vai aprender a criar páginas na web, escrever algoritmos básicos, criar e testar códigos que possibilitam o funcionamento correto de programas e aplicações web.</p>
         <h5>Habilidades técnicas ensinadas:</h5>
         <p>
        •Internet 
        •Unix & Shell
        •Git
        •HTML 
        •CSS
        •Javascript
        •Testes Unitários em Javascript  
        </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}