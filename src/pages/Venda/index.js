import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'

import React from 'react'

const Venda = () => {
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
                                        Descrição
                                        Características:
                                        - Marca: Asus
                                        - Modelo: 90MB19N0-C1BAY0
                                        Especificações:
                                        CPU:
                                        - Soquete Intel® LGA1700 para Processadores* 12a Gen Intel® Core™, Pentium® Gold e Celeron®
                                        - Suporta Intel® Turbo Boost Technology 2.0 e Intel® Turbo Boost Max Technology 3.0**
                                        * Verifique www.asus.com para lista de suporte de CPU.
                                        ** O suporte a Intel® Turbo Boost Max Technology 3.0 depende do tipo de CPU.
                                        Chipset:
                                        - Chipset Intel® H610
                                        Memória:
                                        - 2 x Memória* DIMM, Max. 64GB, DDR4 3200/3000/2933/2800/2666/2400/2133 Non-ECC, Un-buffered
                                        - Dual Channel Memory Architecture
                                        - Suporta Intel® Extreme Memory Profile (XMP)
                                        * A taxa de dados de memória real depende dos tipos de CPU e módulos DRAM, para mais informações, consulte o site do fabricante (Asus com) para obter a QVL (Listas de fornecedores qualificados) de Memória .
                                    </p>
                                </ul>
                            </div>
                        </div>

                    </div>



                </div>
                <Footer />
            </div>
        </div>


    )
}


export default Venda