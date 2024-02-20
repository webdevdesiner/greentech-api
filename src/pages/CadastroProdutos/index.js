import './style.css'
import Footer from '../../components/Footer'
import {FaPlus} from "react-icons/fa"
import React from 'react'

const CadastroProdutos = () => {
    return (
        <body className='corpo' >
            <div className='HomemArea'>

            <div className='Blackedo'>

                <form className='forma'>

                    <label className='red' for="nomedoproduto">Nome do Produto:</label>
                    <input className='pagodinho' type="text" id="produto" name="produto" required></input>

                    <label class="picture" for="picture__input" tabIndex="0">Adicionar Foto
                    <FaPlus />
                        <span class="picture__image"></span>
                    </label>

                    <input type="file" name="picture__input" id="picture__input"></input>

                        <label className='red' for="anoLancamento">Ano de Lançamento:</label>
                        <input className='pagodinho' type="number" id="anoLancamento" name="anoLancamento" min="1900" max="2024" required></input>

                        <label className='red' for="descricao">Descrição:</label>
                        <textarea id="descricao" name="descricao" rows="10" cols="80" required></textarea>

                        <label className='red' for="preco">Preço:</label>
                        <input className='pagodinho' type="number" id="preco" name="preco" min="0" step="0.01" required></input>

                        <label className='red' for="quantidade">Quantidade:</label>
                        <input className='pagodinho' type="number" id="quantidade" name="quantidade" min="0" required></input>

                        <label className='red' for="categoria">Categoria:</label>
                        <select className='seleto' id="categoria" name="categoria" required>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="acessorios">Acessórios</option>
                            <option value="outros">Outros</option>

                        </select>

                        <button className='botao' type="submit">Cadastrar Produto</button>
                </form>

            </div>
           
            <Footer />
            </div>
        </body>

    )
}

export default CadastroProdutos