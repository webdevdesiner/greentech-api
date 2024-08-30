import Footer from '../../components/Footer';
import Nav from './../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import api from '../../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [dados, setDados] = useState({
    email: '',
    senha: ''
  })
  const {logado, setLogado} = useGlobalContext()
  const [erroLogin, setErroLogin] = useState(
    false
   
  )

  const handleChange = (e) => {
    setDados({...dados, [e.target.name]: e.target.value})
  }

  console.log(logado)
  
  const handleCadastrar = (e) => {
    e.preventDefault();
    api.post('/login', dados).then(data => 
    {
      console.log(data)
      if(!data) {
        setErroLogin(true)
        setLogado(false)
        return
      } 
      setErroLogin(false)
      setLogado(true)
      navigate('/cadprodutos')
      return
      
    }
    )
  }
  return (
    <div className='homeArea'>
    
      <div className='home'>
        
        <div className='blacked'>
        <Nav/>
        <Menu/>
          <div className='imgArea2'></div>
          <div className='welcome'><h1>LOGIN</h1></div>
          <div className='loginArea'>
            <label>Usuário</label>
            <input onChange={handleChange} type='text' name='email' value={dados.email} required></input>

            <label>Senha</label>
            <input onChange={handleChange} type='password' name='senha' value={dados.senha} required></input>
          </div>
          
          <div className='botao'><button onClick={handleCadastrar}>ENTRAR</button>  </div>
          <div className='botao'><button><strong>< a href='/cadastro'>CADASTRAR</a></strong></button>  </div>
          
        </div>
        
        <Footer/>
      </div>
      
    </div>


  )
}


export default Login