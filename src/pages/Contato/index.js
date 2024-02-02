import './style.css';
import {FaUser} from "react-icons/fa";


import React from 'react'
import MinhaImagem from '../../assets/images/greentech.png'
// import Grenn from './../../assets/images/MicrosoftTeams-image (1).png'


const Contato = () => {
  return (


    <div className="HomeArea">
      <div className="blacked">
        <div className="imagem">
          <img src={MinhaImagem}></img>

        </div>

        <div className="contatoArea">
          <div className="formulario">

            <h1>Contate-nos</h1>

            <label for="Nome">Nome:</label>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{position:'absolute', marginRight: '-40px'}}>
            <FaUser/>
            </div>
            
            <input type='text' id=' nome' name='nome' className='form'></input>
             
            </div>
            

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" className='form'></input>

            <label for="assunto">Assunto:</label>
            <input type="text" id="assunto" name="assunto" className='form'></input>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem"></textarea>




          </div>
        </div>
      </div>
    </div>



  )
}

export default Contato