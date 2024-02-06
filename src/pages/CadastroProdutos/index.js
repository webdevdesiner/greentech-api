import './style.css'
import Footer from '../../components/Footer'
import {FaPlus} from "react-icons/fa"
import React from 'react'

const CadastroProdutos = () => {
    return (
        <body className='HomeArea'>
            <div className='Tela'></div>

            <div className='Blacked'>

                <form>

                    <label for="nomedoproduto">Nome do Produto:</label>
                    <input type="text" id="produto" name="produto" required></input>

                    <label class="picture" for="picture__input" tabIndex="0">Adicionar Foto
                    <FaPlus />
                        <span class="picture__image"></span>
                    </label>

                    <input type="file" name="picture__input" id="picture__input"></input>

                        <label for="anoLancamento">Ano de Lançamento:</label>
                        <input type="number" id="anoLancamento" name="anoLancamento" min="1900" max="2024" required></input>

                        <label for="descricao">Descrição:</label>
                        <textarea style="resize: none" id="descricao" name="descricao" rows="4" required></textarea>

                        <label for="preco">Preço:</label>
                        <input type="number" id="preco" name="preco" min="0" step="0.01" required></input>

                        <label for="quantidade">Quantidade:</label>
                        <input type="number" id="quantidade" name="quantidade" min="0" required></input>

                        <label for="categoria">Categoria:</label>
                        <select id="categoria" name="categoria" required>
                            <option value="smartphones">Smartphones</option>
                            <option value="laptops">Laptops</option>
                            <option value="acessorios">Acessórios</option>
                            <option value="outros">Outros</option>

                        </select>

                        <button type="submit">Cadastrar Produto</button>
                </form>

            </div>
            <Footer />
        </body>

    )
}

export default CadastroProdutos