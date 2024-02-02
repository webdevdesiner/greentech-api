import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';

import React from 'react'

const Home = () => {
  return (
    <div className='homeArea'>
      


      <div className='home'>
        <div className='blacked'>
        <Nav/>
          <div className='imgArea'></div>
          <div className='welcome'><h1>SEJA BEM VINDO</h1></div>
          <div className='boxTexto'>
          <div className='texto'> Na Green-Tech, acreditamos no poder do compartilhamento para impulsionar a inovação, economizar recursos e promover a sustentabilidade. Nosso projeto oferece uma plataforma onde entusiastas de tecnologia, estudantes, profissionais e pequenas empresas podem se conectar para compartilhar e encontrar componentes eletrônicos reutilizáveis. </div>
          </div>
          

          

        </div>
           <Footer />
      </div>
    </div>


  )
}


export default Home