import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import './style.css'

const Cadastro = () => {
    return (
        <div className='homeArea'>



            <div className='home'>
                <div className='blacked'>
                    <Nav />
                    <Menu />
                    <div className='imgArea'></div>
                    <div className='cadastroArea'>

                        <form className='acessoArea'>
                            <label for="email">Email</label>
                            <input type='email' id='email' name='email'></input>
                            

                            <label for="senha">Senha</label>
                            <input type='password' id='senha' name='senha'></input>

                           
                            <label for="nome"> Nome Completo</label>
                            <input type='text'></input>

                            <label for="endereco">Endereço</label>
                            <input type='endereco' id='endereco' name='endereco'></input>

                            <label for="telefone">Telefone</label>
                            <input type='telefone' id='telefone' name='telefone'></input>

                        
                        </form>

                        <form className='acessoArea2'>
                            <label for="confirmeEmail">Confirme seu email</label>
                            <input type='email' id='confirmeEmail' name='email'></input>

                           
                            <label for="confimeSenha">confirme su Senha</label>
                            <input type='password' id='confirmeSenha' name='confirmeSenha'></input>
                            

                            <label for="emacpfil">CPF</label>
                            <input type='number' id='cpf' name='cpf'></input>

                           
                        </form>








                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Cadastro