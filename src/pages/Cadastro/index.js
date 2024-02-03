import './style.css'


import React from 'react'

const Cadastro = () => {
  return (
    <body className='HomeArea'>

      <div className='Blacked'>

        <div id="cadastroForm">
          <form id="formulario">

              <label for="nome">Nome:</label>
              <input type='text' id='CadstroArea'></input>
          
              <label for="email">Email:</label>
              <input type="email" id="email" required></input>

              <label for="confirmarEmail">Confirmar Email:</label>
              <input type="email" id="confirmarEmail" required></input>
          
              <label for="senha">Senha:</label>
              <input type="password" id="senha" required></input>

              <label for="confirmarSenha">Confirmar Senha:</label>
              <input type="password" id="confirmarSenha" required></input>
          
              <label for="telefone">Telefone:</label>
              <input type='tel' id='telefone'></input>

              <label for="cep">CEP:</label>
              <input type='password' id='cep'></input>
        
            <button type="button" onclick="cadastrar()">Cadastrar</button>
          </form>
        </div>
      </div>
    </body>
  )
}

export default Cadastro


