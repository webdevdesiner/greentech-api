import "./style.css";
import { FaHeart, FaPaperPlane } from "react-icons/fa"


import React from 'react';
import MinhaImagem from './../../assets/images/greentech.png'



const Venda = () => {
  return (

    <div className="HomeArea">
      <div className="blacked">
        <div className="imagem">
          <img src={MinhaImagem}></img>
        </div>

        <div className="telaArea">
          <div className="div1">


            <label for='nome'></label>
            <input disabled type="text" id="titulo" name="titulo" className="for" placeholder="Tela de Computador"></input>

            <div className="Titulotela">

            </div>
            <div className="preço">
              <label for="preco"></label>
              <input type="number" id="preco" name="preco" min="0" step="0.01" placeholder="Preço"></input>

              <button>Comprar</button>
            </div>

          </div>


          <div className="div2">

            <div>

                <label for="mensagem">Descriçao do produto</label>
            </div>
                <textarea disabled id="mensagemV" name="mensagem" rows={50} cols={50} placeholder="Tem duvidas?"></textarea>
             

            </div>
          </div>

        </div>

        <div>

        </div>


      </div>



  )
}

export default Venda