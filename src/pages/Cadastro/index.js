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
                        <div className='formArea'>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Email</label>
                                        <input></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Senha</label>
                                        <input></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Confirme sua senha</label>
                                        <input></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='formArea'>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Nome Completo</label>
                                        <input></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>CPF</label>
                                        <input></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Data de nascimento</label>
                                        <input></input>
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
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>CPF</label>
                                        <input></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label>Data de nascimento</label>
                                        <input></input>
                                        <label for="telefone">Telefone:</label>
                                        <input type="tel" id="telefone" name="telefone"></input>
                                    </div>
                                </div>
                            </div>
                            <div className='bloco'>
                                <div className='linha'>
                                    <div className='campo'>
                                        <label for="endereco">Endereço:</label>
                                        <input type="text" id="endereco" name="endereco"></input>
                                        <label for="complemento">Complemento:</label>
                                        <input type="text" id="complemento" name="complemento"></input>
                                    </div>
                                </div>
                            </div>


                        </div>




                    </form>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Cadastro