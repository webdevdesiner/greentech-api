import React from 'react';
import Nav from '../../components/Nav';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import './style.css';
import { useAnucios } from './hook';


const Listagem = () => {
  const { anuncios, isLoading, handleClickDetails } = useAnucios();
  if (isLoading) {
    return <div> carregando... </div>
  }
  return (
    <div className='homeArea'>
      <div className='home'>
        <div className='blacked'>
          <Nav />
          <Menu />
          <div className='imgArea'></div>

          <div className='blocoListagem'>
            <ul className='listagemArea'>
              {anuncios && anuncios.map((item, index) => {
                console.log(item)
                return (
                  <li onClick={() => handleClickDetails(item.ANUNCIO_ID)} className='boxListagemDescricaoFoto'>
                    <div className='fotoListagem'></div>
                    <div className='DescricaoListagem'>
                      <p>colocar descrição do DB</p>
                      <div className='listagemComprar'>
                        COMPRAR
                        <FaShoppingCart className='iconeMedio2' />
                      </div>
                    </div>
                  </li>
                )
              })}

            </ul>
          </div>





        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Listagem