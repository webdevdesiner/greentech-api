import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import './style.css'
import {Formik, Form, Field} from 'formik';
import {initialUser, useGlobalContext} from '../../context/GlobalContext';



const CadastroUsuario = () => {

    const { addUsuario } = useGlobalContext();
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
                                email: values.email,
                                senha: values.senha, 
                                nome: values.nome,
                                endereco: values.endereco,
                                bairro: values.bairro, 
                                cidade: values.cidade,
                                uf: values.uf,
                                cep: values.cep,
                                }
                             
                                addUsuario(newUser);

                                actions.setValues(
                                    initialUser
                                  )
                        }}
                        >
                        <Form className='cadastroArea' method='post'  >



                            <h1>CADASTRO USUÁRIO</h1> <br /><br /><br />

                            <div className='blocoLine'>
                                <div className='formArea'>
                                    <div className='bloco'>
                            
                                        <div className='campo'>
                                            <label>Email</label>
                                            <Field 
                                            id="email" type='email' name="email" placeholder="digite seu email"/>
                                        </div>

                                    </div>
                                    <div className='bloco'>

                                        <div className='campo'>
                                            <label>Senha</label>
                                            <Field id="senha" placeholder="digite sua senha" type='password' name="senha"/>
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
                                                <label>Nome</label>
                                                <Field id="nome" type='text' name="nome" />
                                            </div>
                                        </div>
                                    </div>  
                                </div>  
                            <div className='formArea'>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Endereço</label>
                                            <Field id="endereco" type='text' name="endereco"/>
                                        </div>
                                    </div>
                                </div>
                               
                                
                            </div>
                            <div className='formArea'>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Bairro</label>
                                            <Field id="bairro" type='text' name="bairro"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>Cidade</label>
                                            <Field id="cidade" type='text'name="cidade"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>UF</label>
                                            <Field id="uf" type='text' name="uf"/>
                                        </div>
                                    </div>
                                </div>

                                <div className='bloco'>
                                    <div className='linha'>
                                        <div className='campo'>
                                            <label>CEP</label>
                                            <Field type='text' name="cep"/>
                                        </div>
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

export default CadastroUsuario