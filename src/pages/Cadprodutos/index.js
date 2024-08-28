import React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import './style.css';
import Menu from './../../components/Menu'

import { Formik, Form, Field } from 'formik';
import { initialProdutos, useGlobalContext } from '../../context/GlobalContext';

const Cadprodutos = () => {
  const { addProduto } = useGlobalContext();
  return (   
    <div className='homeArea'>
            <div className='home'>
                <div className='blacked'>
                    <Nav />
                    <Menu />
                    <div className='imgArea'></div>

                    <div>
                    <Formik
                    
                        initialValues={initialProdutos}
                        onSubmit={(values, actions) => {
                            const newProduto = {
                                nome: values.nome,
                                marca: values.marca,
                                estado_uso: values.estado_uso,
                                preco: values.preco,
                                descricao: values.descricao,
                                data: values.data,
                                usuarios_id: values.usuario_id,
                              
                                }
                                
                             
                                addProduto(newProduto);

                                actions.setValues(
                                    initialProdutos
                                  )
                        }}
                        
                        >
                        <Form className='cadastroArea' method='post'  >



                            <h1>CADASTRO PRODUTOS</h1> <br /><br /><br />

                            <div className='blocoLine'>
                                <div className='formArea'>
                                    <div className='bloco'>

                                    <div className='campo'>
                                            <label>Nome do Produto</label>
                                            <Field 
                                            id="nome" type='text' name="nome" placeholder="digite o nome do produto"/>
                                        </div>
                                    <div className='campo'>
                                            <label>Marca do Produto</label>
                                            <Field 
                                            id="marca" type='text' name="marca" placeholder="digite a marca do produto"/>
                                        </div>
                                        
                            
                                        <div className='campo'>
                                            <label>Preço</label>
                                            <Field 
                                            id="preco" type='number' name="preco" placeholder="digite o preco do produto" step=".01"/>
                                        </div>

                                    </div>
                                    <div className='bloco'>

                                        <div className='campo'>
                                            <label>Descrição</label>
                                            <Field id="descricao" placeholder="digite a descricao do produto" type='text' name="descricao"/>
                                        </div>

                                    </div>
                                    <div className='bloco'>

                                        <div className='campo'>
                                            <label>Estado de uso</label>
                                            <Field id='estado_uso' type='text' name="estado_uso" placeholder='Qual estado de uso'/>
                                        </div>

                                    </div>
                                </div>
                                <div className='formArea'>
                                    <div className='bloco'>
                                        <div className='linha'>
                                            <div className='campo'>
                                                <label>Data</label>
                                                <Field id="data" type='date' name="data" />
                                            </div>
                                        </div>
                                    </div>  
                                </div>  
                                <div>
                                    <label htmlFor="mySelect">Escolha uma opção:</label>
                                    <Field id="usuario_id" as="select" name="usuario_id">
                                    <option value="">Selecione o usuario</option>
                                    <option value="4">usuario 4</option>
                                    <option value="15">usuario 15</option>
                                    <option value="16">usuario 16</option>
                                    <option value="17">usuario 17</option>
                                    <option value="18">usuario 18</option>
                                    </Field>
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

export default Cadprodutos