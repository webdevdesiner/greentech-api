import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';

import React from 'react'

const Venda = () => {
    return (
        <div className='homeArea'>



            <div className='home'>
                <div className='blacked'>
                    <Nav />
                    <div className='imgArea'></div>

                    <div className='vendaArea'>
                        <div className='vendaFoto'> foto </div>    {/* [foto */}
                        <div className='vendaDescricao'>Descrição</div> {/*descrição*/}
                    </div>




                </div>
                <Footer />
            </div>
        </div>


    )
}


export default Venda