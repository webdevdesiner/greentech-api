import React from 'react';
import Nav from '../../components/Nav';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';


const Listagem = () => {
  return (
    <div className='homeArea'>
      <div className='home'>
        <div className='blacked'>
          <Nav />
          <Menu />
          <div className='imgArea'></div>
          
          <div className='blocoListagem'>
            <div className='listagemArea'>

              <div className='boxListagemDescricaoFoto'>

                <div className='fotoListagem'></div>
                <div className='DescricaoListagem'>Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700 <div className='listagemComprar'>COMPRAR<FaShoppingCart className='iconeMedio2'/></div> </div>
              </div>
              <div className='boxListagemDescricaoFoto'>

                <div className='fotoListagem'></div>
                <div className='DescricaoListagem'>Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700 <div className='listagemComprar'>COMPRAR<FaShoppingCart className='iconeMedio2'/></div> </div>
              </div>
              <div className='boxListagemDescricaoFoto'>

                <div className='fotoListagem'></div>
                <div className='DescricaoListagem'>Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700<div className='listagemComprar'>COMPRAR<FaShoppingCart className='iconeMedio2'/></div> </div>
              </div>
            </div>
            <div className='listagemArea'>

              <div className='boxListagemDescricaoFoto'>

                <div className='fotoListagem'></div>
                <div className='DescricaoListagem'> Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700 <div className='listagemComprar'>COMPRAR<FaShoppingCart className='iconeMedio2'/></div></div>
              </div>
              <div className='boxListagemDescricaoFoto'>

                <div className='fotoListagem'></div>
                <div className='DescricaoListagem'> Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700 <div className='listagemComprar'>COMPRAR<FaShoppingCart className='iconeMedio2'/></div></div>
              </div>
              <div className='boxListagemDescricaoFoto'>

                <div className='fotoListagem'></div>
                <div className='DescricaoListagem'>Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700 
                
                <div className='listagemComprar'>COMPRAR<FaShoppingCart className='iconeMedio2'/></div>
                </div>


              </div>
            </div>
          </div>





        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Listagem