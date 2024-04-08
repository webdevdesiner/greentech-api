import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'

const Cadprodutos = () => {
  return (
    <div>

      <div className='homeArea'>



        <div className='home'>
          <div className='blacked'>

            <Nav />
            <Menu />
            <section className='blocoLogo'>
              <h1 className='tituloProduto'>Titulo Produto h1</h1>
            </section>

            <section className='formularioProduto'>
              <form className='forCadProdutos'>
                <label for="nome">Nome do Produto:</label>
                <input type="text" id="nomeProduto" name="nome" required></input>

                <label for="preco">Preço:</label>
                <input type="number" id="precoProduto" name="preco" step="0.01" required></input>

                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidadeProduto" name="quantidade" required></input>

                <label for="descricao">Descrição:</label>
                <textarea id="descricaoProduto" name="descricao" rows="20" required></textarea>

                <button type="submit" className='botao'>Cadastrar</button>


              </form>

            </section>







          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Cadprodutos