import React from 'react'
import "./style.css"
import MinhaImagem from "../../assets/images/greentech.png"
import Footer from "../../components/Footer";

const MeusAnuncios = () => {
    return (
        <div className="AreaHome">
            <div className='blacked'>
                <div className="preto">
                    <div className="imeig">
                        <img src={MinhaImagem}></img>
                    </div>


                    <div></div>

                </div>
                <h1 id='linha'>Meus Anuncios</h1>
                <div class="linha"></div>

                <div class="anuncios-grid">
                    <div class="anuncio">
                        <h3>Produto 1</h3>
                        <p>Descrição do produto 1.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 2</h3>
                        <p>Descrição do produto 2.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 3</h3>
                        <p>Descrição do produto 3.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 4</h3>
                        <p>Descrição do produto 1.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 5</h3>
                        <p>Descrição do produto 2.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 6</h3>
                        <p>Descrição do produto 3.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 1</h3>
                        <p>Descrição do produto 1.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 2</h3>
                        <p>Descrição do produto 2.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 3</h3>
                        <p>Descrição do produto 3.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 4</h3>
                        <p>Descrição do produto 1.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 5</h3>
                        <p>Descrição do produto 2.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 6</h3>
                        <p>Descrição do produto 3.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 7</h3>
                        <p>Descrição do produto 3.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 8</h3>
                        <p>Descrição do produto 1.</p>
                    </div>
                    <div class="anuncio">
                        <h3>Produto 9</h3>
                        <p>Descrição do produto 2.</p>
                    </div>
                    
                    
                    {/* <!-- Adicione mais anúncios conforme necessário --> */}
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default MeusAnuncios