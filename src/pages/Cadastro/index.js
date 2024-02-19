import './style.css'


import React from 'react'

const Cadastro = () => {
  return (
    <body className='cuerpo' >
      <div className='HomeArea'>

        <div className='Blacked'>

          <div id="cadastroForm">
            <form id="formulario">

              <label className='shell' for="nome">Nome:</label>
              <input className='ipiranga' type='text' id='CadstroArea'></input>

              <label className='shell' for="email">Email:</label>
              <input className='ipiranga' type="email" id="email" required></input>

              <label className='shell' for="confirmarEmail">Confirmar Email:</label>
              <input className='ipiranga' type="email" id="confirmarEmail" required></input>

              <label className='shell' for="senha">Senha:</label>
              <input className='ipiranga' type="password" id="senha" required></input>

              <label className='shell' for="confirmarSenha">Confirmar Senha:</label>
              <input className='ipiranga' type="password" id="confirmarSenha" required></input>

              <label className='shell' for="telefone">Telefone:</label>
              <input className='ipiranga' type='tel' id='telefone'></input>

              <label className='shell' for="cep">CEP:</label>
              <input className='ipiranga' type='password' id='cep'></input>

              <button className='boton' type="button" onclick="cadastrar()">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Cadastro


