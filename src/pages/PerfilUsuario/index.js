import React from 'react'
import './style.css'
import { FaEyeSlash, FaRegUserCircle, FaUserCircle } from "react-icons/fa"

const PerfilUsuario = () => {
    return (

        <body className='bodi'>
            <header className='cabeca'>
                <h1 id='perfil'>Perfil do usuario</h1>
            </header>
            <div className='CorpoPerfil'>
                <form>
                    <div className='W-100 box'>
                        <div className='box' id='form-form'>
                            <div class="image-upload box">
                                <img src="" className='w-100 h-100'></img>
                                <FaRegUserCircle className='icons' />
                                <input type="file" id="image-field" name="flImage" accept="image/*"></input>
                            </div>

                        </div>
                    </div>
                    <div className='name'>
                        <label>Nome:</label>
                        <input type='text' id='nome' name='nome' placeholder="Nome do usuário"></input>
                    </div>

                    <div className='mail'>
                        <label>Email:</label>
                        <input type='email' id='email' name='email' placeholder="usuario@email.com"></input>
                    </div>

                    <div className='pass'>
                        <label className='god' >Senha atual:</label>
                        <input type="password" id="password" name="password" placeholder='Senha atual'></input>
                        <FaEyeSlash />
                    </div>

                    <div className='pass'>
                        <label className='god' >Nova Senha:</label>
                        <input type="password" id="password" name="password" placeholder='Senha nova'></input>
                        <FaEyeSlash />
                    </div>

                    <div className='telefone'>
                        <label>Telefone:</label>
                        <input type='text' id='fone' name='fone' pattern='\d(2)\ \d(4)\-\d(4)' placeholder='(00) 0000-0000' ></input>
                    </div>

                    <div className='pagodin'>
                        <label className='pago' for="cep">CEP:</label>
                        <input className='pa' type='password' id='cep' placeholder='Seu Cep'></input>
                    </div>

                    <button id='butao' type="button" onclick="salvarAlteracoes()">Salvar Alterações</button>


                </form>


            </div>
        </body>
    )
}

export default PerfilUsuario