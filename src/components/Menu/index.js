import React from 'react'
import './style.css'

const Menu = () => {
  return (
    <div className='menuArea'>
      <ul>
        <li> <a href='./'>Home</a></li>
        <li> <a href='./Login'>Login</a></li>
        <li><a href='./Venda'>Venda</a></li>
        <li><a href='./Sobre'>Sobre</a></li>
        <li><a href='./FaleConosco'>Fale Conosco</a></li>
        <li>Meus Anuncios</li>
        <li><a href='./Cadastro'>Cadastro</a></li>
      </ul>


    </div>
  )
}

export default Menu