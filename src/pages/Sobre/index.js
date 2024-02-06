import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Menu from './../../components/Menu'
import './style.css'



const Sobre = () => {
  return (
    <div className='homeArea'>



      <div className='home'>
        <div className='blacked'>
          <Nav />
          <Menu/>
          <div className='imgArea'></div>

          <div className='sobreArea'>
            <h1>SOBRE</h1>
            <div type='text' className='sobreTexto'>

              <p>Na GREEN-TECH, acreditamos no poder do compartilhamento para impulsionar a inovação, economizar recursos e promover a sustentabilidade.
                <br/>Nosso projeto oferece uma plataforma onde entusiastas de tecnologia, estudantes, profissionais e pequenas empresas podem se conectar para compartilhar e encontrar componentes eletrônicos reutilizáveis.

<li>Como Funciona:</li>

Os usuários podem listar os componentes eletrônicos que desejam compartilhar, indicando detalhes como tipo, modelo e condição.

<li>Procura Inteligente:</li> Explore nossa base de dados para encontrar os componentes que você precisa para seus projetos. Utilize filtros para refinar suas buscas.

<li>Compartilhamento Responsável:</li> Facilitamos transações seguras e transparentes entre os usuários. Empréstimos, vendas e trocas são incentivados para garantir que os componentes eletrônicos tenham uma segunda vida útil.

<li>Comunidade Ativa:</li> Participe de nossa comunidade para trocar dicas, truques e conhecimentos sobre reparos e atualizações de eletrônicos.

<br/>Ao optar pela GREEN-TECH, você contribui para a redução do desperdício eletrônico e para a construção de uma comunidade comprometida com a sustentabilidade e a inovação. Junte-se a nós agora e comece a compartilhar e reutilizar componentes eletrônicos de maneira consciente!
<h5>GREEN-TECH, Por um Futuro Eletrônico Sustentável.</h5></p>
<br/><i>Equipe GREEN-TECH</i>
            </div>

            
          </div>




        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Sobre