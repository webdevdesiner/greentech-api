import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'
import { FaShoppingCart } from 'react-icons/fa';

import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { getAnuncio } from '../../requests/show';

const Venda = () => {
    const { id } = useParams();
  const { data: anuncio, isLoading} = useQuery(['getAnuncio', {id}], getAnuncio, {
    enabled: !!id
  })
   if(isLoading) {
    return <div>carregando...</div>
   }
   console.log(anuncio)
    return (
        <div className='homeArea'>



            <div className='home'>
                <div className='blacked'>
                    <Nav />
                    <Menu />
                    <div className='imgArea'></div>

                    <div className='vendaArea'>
                        <div className='boxFoto'>
                            <div className='fotoVenda'></div>
                        </div>
                        <div className='descricaoArea'>
                            <div className='boxTextoVenda'>
                                <ul>
                                    <h5>Descrição</h5>
                                    <p>
                                        {anuncio?.DESCRICAO}
                                    </p>

                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='comprarArea'>
                        <div className='preço'><p>preço</p></div>
                        <div className='botaoComprar'>
                        <button type="button">COMPRAR </button>
                        </div>
                        <div className='botaoCarrinho'>
                            <button type='button'><FaShoppingCart className='iconeMedio'/></button>
                        </div>
                    </div>



                </div>
                <Footer />
            </div>
        </div>


    )
}


export default Venda