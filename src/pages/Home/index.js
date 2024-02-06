import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'

import React from 'react'

const Home = () => {
  return (
    <div className='homeArea'>
      


      <div className='home'>
        <div className='blacked'>
        <Nav/>
        <Menu/>
          <div className='imgArea'></div>
          <div className='welcome'><h1>SEJA BEM VINDO</h1></div>
          <div className='boxTexto'>
        <div className='botaoArea'>
          <div className='botao'><button><strong><a href='./Login'>LOGIN</a></strong></button>  </div>
          <div className='botao'><button><strong>VISITANTE</strong></button>  </div>
          </div>
          </div>
          

          

        </div>
           <Footer />
      </div>
    </div>


  )
}


export default Home