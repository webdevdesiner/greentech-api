import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import './style.css'
import {Formik, Form, Field} from 'formik';
import {initialUser, useGlobalContext} from '../../context/PostContext';



const Cadastro = () => {

    const { users, addUser } = useGlobalContext();
    console.log(users)
    return (
        <div className='homeArea'>
            <div className='home'>
                <div className='blacked'>
                    <Nav />
                    <Menu />
                    <div className='imgArea'></div>

                    <div>
                    <Formik
                        initialValues={initialUser}
                        onSubmit={(values, actions) => {
                            const newUser = {
                                id: users[users.length - 1]?.id ? users[users.length - 1]?.id + 1 : 1,
                                nome: values.nome,
                                cpf: values.cpf,
                                email: values.email,
                                senha: values.senha,
                                nascimento: values.nascimento,
                                genero: values.genero,
                                rg: values.rg,
                                perfilUsuario: values.perfilUsuario,
                                endereco: values.endereco,
                                numero: values.numero,
                                complemento: values.complemento      
                                }
                             
                            addUser(newUser);
                            actions.setValues(
                                initialUser
                            )

                          
                        }}
                        >
                        <Form className='cadastroArea'>



                            <h1>CADASTRO USUÁRIO</h1> <br /><br /><br />

                            <div className='blocoLine'>
                                <div className='formArea'>
                                    <div className='bloco'>

                                        <div className='campo'>
                                            <label>Email</label>
                                            <Field type='email' name="email" />
                                        </div>

                                    </div>
                                    <div className='bloco'>

                                        <div className='campo'>
                                            <label>Senha</label>
                                            <Field type='password' name="senha"/>
                                        </div>

                                    </div>
                                    <div className='bloco'>

                                        <div className='campo'>
                                            <label>Confirme sua senha</label>
                                            <input type='password' name="confirmaSenha"/>
                                        </div>

                                    </div>
                                </div>
                                <div className='formArea'>
                                    <div className='bloco'>
                                        <div className='linha'>
                                            <div className='campo'>
                                                <label>Nome Completo</label>
                                                <Field type='text' name="nome" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bloco'>
                                        <div className='linha'>
                                            <div className='campo'>
                                                <label>CPF</label>
                                                <Field type='text' name="cpf"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bloco'>
                                        <div className='linha'>
                                            <div className='campo'>
                                                <label>Data de nascimento</label>
                                                <Field type='date' name="nascimento"/>
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
                                                <Field type='number' name="rg"/>
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
                                            <Field type='text' name = "endereco"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Numero</label>
                                            <Field type='number' name="numero"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Complemento</label>
                                            <Field type='text' name = "complemento"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='formArea'>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Bairro</label>
                                            <Field type='text' name = "bairro"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Cidade</label>
                                            <Field type='text'name = "cidade"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Estado</label>
                                            <Field type='text' name = "estado"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='botaoCadatsroEnviarAlinhamento'>
                                <button type='submit' className='botaoCadastroEnviar'>ENVIAR</button>
                            </div>
                        </Form>
                    </Formik>

                    <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro