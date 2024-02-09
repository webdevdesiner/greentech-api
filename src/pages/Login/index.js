import Footer from '../../components/Footer';
import Nav from './../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'


import React from 'react'

const Login = () => {
  return (
    <div className='homeArea'>
    
      <div className='home'>
        
        <div className='blacked'>
        <Nav/>
        <Menu/>
          <div className='imgArea'></div>
          <div className='welcome'><h1>LOGIN</h1></div>
          <div className='loginArea'>
            <label>Usuário</label>
            <input type='text'></input>

            <label>Senha</label>
            <input type='password'></input>
          </div>
          
          <div className='botao'><button><a href='./Listagem'><strong>ENTRAR</strong></a></button>  </div>
          <div className='botao'><button><strong>< a href='./../Cadastro'>CADASTRAR</a></strong></button>  </div>
          
        </div>
        
        <Footer/>
      </div>
      
    </div>


  )
}


export default Login