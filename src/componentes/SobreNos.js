import React from "react";
/*import SobreNos from "./SobreNos";*/
import { Link } from 'react-router-dom';
/*import { useState } from "react";*/
import '../Apprutas.css';
function SobreNos() {
    return(
    <div>
      <form className="presenta_css">  
      <div>
        <h2> Instituto NU </h2>
        <p className="centrasobrenos"> Uma das missões do Nubank é promover a inclusão financeira. Desde o início, em 2013, queríamos que milhões de brasileiros que estavam à margem do sistema bancário pudessem ter acesso a serviços sem burocracia e com dignidade. Hoje, 9 anos depois, anunciamos o lançamento do Instituto Nu, que vai trabalhar pela redução da desigualdade, incentivando iniciativas nas favelas e periferias brasileiras.

O lema da instituição é “pelo corre de quem sempre foi correria”, e o objetivo é atuar em três plataformas: educação para empregabilidade, empreendedorismo e inovação social. 

“O Instituto Nu chega para levar adiante nossos valores de inovar e romper o status quo. A entidade vai dar voz e espaço para o que acontece na periferia com base em nossos princípios de causar impacto na vida das pessoas” 

Cristina Junqueira, cofundadora do Nubank e presidente do Instituto Nu

Abaixo, saiba mais sobre essa iniciativa do Nubank.

Nu Impacto

O lançamento do Instituto Nu acompanha os princípios do Nu Impacto, a área de atuação ESG do Nubank – que lançou seu Manifesto no início deste ano – e tem como compromisso a geração de impacto positivo nas áreas de governança, social e cuidado com o meio ambiente. A proposta do Instituto Nu é reunir líderes inconformados para mudar os cenários sociais em favelas e comunidades do Brasil.

“Uma das compreensões do Instituto Nu é de que a frente de atuação esteja alinhada com mulheres negras da periferia, empreendedores das favelas, grupos, organizações e coletivos periféricos para promover impactos reais e eficientes diretamente na ponta. Queremos que a potência da favela seja valorizada e que o Instituto Nu seja uma ferramenta para isso” </p>
       <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
      </div>
      </form>
      </div>
    );
  }

export default SobreNos