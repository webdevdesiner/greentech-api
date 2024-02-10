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

              <div className='imgAreaLogo'></div>
              <div className='formCadProdutoArea'>
               

                <label>Nome do Produto</label>
                <input type='text'></input>
              </div>
              <div className='forCadProdutoArea'>
                
            
                <label>Foto do Produto</label>
                <input type='file'></input>
              </div>

            </section>







          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Cadprodutos