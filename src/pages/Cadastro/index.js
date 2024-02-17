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



                    <form className='cadastroArea'>
                        <h1>CADASTRO USUÁRIO</h1> <br/><br/><br/>

                        <div className='blocoLine'>
                            <div className='formArea'>
                                <div className='bloco'>
                                    
                                        <div className='campo'>
                                            <label>Email</label>
                                            <input type='email'></input>
                                        </div>
                                    
                                </div>
                                <div className='bloco'>
                                    
                                        <div className='campo'>
                                            <label>Senha</label>
                                            <input type='password'></input>
                                        </div>
                                    
                                </div>
                                <div className='bloco'>
                                    
                                        <div className='campo'>
                                            <label>Confirme sua senha</label>
                                            <input type='password'></input>
                                        </div>
                                    
                                </div>
                            </div>
                            <div className='formArea'>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Nome Completo</label>
                                            <input type='text'></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>CPF</label>
                                            <input type='number'></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Data de nascimento</label>
                                            <input type='date'></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='formArea'>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label for="genero">Gênero:</label>
                                            <select id="genero" name="genero">
                                                <option value="masculino">Masculino</option>
                                                <option value="feminino">Feminino</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>RG</label>
                                            <input type='number'></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                        <label for="genero">Perfil Usuário:</label>
                                            <select id="genero" name="genero">
                                                <option value="comprador">Comprador</option>
                                                <option value="vendedor">Vendedor</option>
                                                <option value="compradorVendedor">Comprador/Vendedor</option>
                                                </select>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>

                        
                        <div className='formArea'>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Endereço</label>
                                        <input type='text'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Numero</label>
                                        <input type='number'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Complemento</label>
                                        <input type='text'></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='formArea'>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Bairro</label>
                                        <input type='text'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Cidade</label>
                                        <input type='text'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Estado</label>
                                        <input type='text'></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='botaoCadatsroEnviarAlinhamento'> 
                        <div><button className='botaoCadastroEnviar'><a href='./Login'>ENVIAR</a></button></div>
                        </div>
                    </form>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Cadastro