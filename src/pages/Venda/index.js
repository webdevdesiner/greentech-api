import "./style.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"


import React from 'react';
import MinhaImagem from './../../assets/images/greentech.png'
import Footer from "../../components/Footer";



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
              <div id="coracao">
              <FaRegHeart/>

              </div>

            </div>
            <div className="preço">
              <label for="preco"></label>
              <button disabled  id="preco" name="preco" rows={50} cols={50} placeholder="R$ Preço">R$ Preço</button>
              <button id="comprar">Comprar</button>
            </div>

          </div>


          <div className="div2">

            <div>

                <label for="mensagem">Descriçao do produto</label>
            </div>
                <textarea disabled id="mensagemV" name="mensagem" rows={50} cols={50} placeholder="Tem duvidas?"></textarea>
             
            </div>
          </div>

          <div className="AreaProdutos">
            <div className="Quadro"></div>
            <div className="Quadro"></div>
            <div className="Quadro"></div>
            <div className="Quadro"></div>

          </div>
        </div>

        <div>

        </div>

        <Footer/>

      </div>
       



  )
}

export default Venda