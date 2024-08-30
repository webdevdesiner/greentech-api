import './style.css';
import React from 'react';
import Nav from './../../components/Nav';
import Footer from './../../components/Footer';
import Menu from './../../components/Menu'

import { Formik, Form, Field } from 'formik';
import { initialfaleConosco, useGlobalContext } from '../../context/GlobalContext';

const FaleConosco = () => {

  const {addfaleConosco} = useGlobalContext();
  return (




    <div className='homeArea'>
      <div className='home'>
        <div className='blacked'>
          <Nav />
          <Menu />
          <div className='imgArea'></div>
          <Formik
            initialValues={initialfaleConosco}
            onSubmit={(values, actions) => {
              const newfaleConosco = {
                email: values.email,
                mensagem: values.mensagem,
                nome: values.nome,
                telefone: values.telefone,
                }

              addfaleConosco(newfaleConosco);

              actions.setValues(
                initialfaleConosco
              )
            }}
          >

            <div className='faleConoscoArea'>
              <div className='text'>
                <h2>CONTATO</h2>
                <h3> Preenha os dados abaixo e clique em enviar</h3>
              </div>

              <Form className='FormularioArea'>

                <div className='boxers'>
                  <label>Nome</label>
                  <Field name="nome" type='text' className='formBox'></Field>
                </div>
                <div className='email'>
                  <label>Email</label>
                  <Field name="email" type='email' className='formBox'></Field>
                </div>

                <div className='tel'>
                  <label>Telefone</label>
                  <Field name="telefone" type='tel' className='formBox'></Field>
                </div>

                <div className='textMsg'>
                  <label>Mensagem</label>
                  <Field name="mensagem" type='text' className='formMsg'></Field>
                </div>
                <button>ENVIAR</button>

              </Form>
            </div>


          </Formik>

        </div>
        <Footer />
      </div>
    </div>


  )
}

export default FaleConosco