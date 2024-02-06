import './style.css';
import React from 'react';
import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import Menu from './../../components/Menu'

const FaleConosco = () => {
  return (
    <div>

<div className='homeArea'>



<div className='home'>
  <div className='blacked'>
    <Nav />
    <Menu/>
    <div className='imgArea'></div>

    <div className='faleConoscoArea'>
      <div className='text'>
      <h2>CONTATO</h2>
      <h3> Preenha os dados abaixo e clique em enviar</h3>
      </div>  

      <div className='FormularioArea'>

        <div className='boxers'>
        <label>Nome</label>
        <input type='text' className='formBox'></input>
        </div>
        <div className='email'> 
        <label>Email</label>
        <input type='email'className='formBox'></input>
        </div>

        <div className='tel'>
        <label>Telefone</label>
        <input type='tel'className='formBox'></input>
        </div>

        <div className='textMsg'>
        <label>Mensagem</label>
        <input type='text'className='formMsg'></input>
        </div>

      
      </div>
    </div>




  </div>
  <Footer />
</div>
</div>

    </div>
  )
}

export default FaleConosco