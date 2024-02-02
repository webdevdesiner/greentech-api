import './style.css';
import {FaEnvelope, FaEnvelopeOpenText, FaPencilAlt, FaUser} from "react-icons/fa";


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
            <div style={{position:'absolute', marginRight: '-40px', marginLeft:'10px', fontSize:'25px',color:'green'}}>
            <FaUser/>
            </div>
            <input type='text' id=' nome' name='nome' className='form'></input>
            </div>
            

            <label for="email">Email:</label>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{position:'absolute', marginRight: '-40px', marginLeft:'10px',fontSize:'25px',color:'green'}}>
            <FaEnvelope/>
            </div>
            <input type='text' id=' email' name='email' className='form'></input>
            </div>

            <label for="assunto">Assunto:</label>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{position:'absolute', marginRight: '-40px', marginLeft:'10px',fontSize:'25px',color:'green'}}>
            <FaPencilAlt/>
            </div>
            <input type='text' id=' assunto' name='assunto' className='form'></input>
            </div>

            <label for="mensagem">Mensagem:</label>
            <div style={{display: 'flex', alignItems: ''}}>
            <div style={{position:'absolute', marginRight: '-40px', marginLeft:'10px', marginTop:'10px',fontSize:'25px',color:'green'}}>
            <FaEnvelopeOpenText/>
            </div>
            <textarea type='text' id='mensagem' name='mensagem' className='textoarea' placeholder='Digite sua mensagem'></textarea>
            </div>







          </div>
        </div>
      </div>
    </div>



  )
}

export default Contato