import { FaSearch } from 'react-icons/fa';
import './style.css'
import React from 'react';

const Nav = () => {
  return (
    <div>

<div className='navArea'>
<div className='logoMenor'></div>
    <div className='pesquisa'>
      <FaSearch className='iconeMedio'/>
      <input type='text'className='cxInput'></input></div>
    <button>Botão</button>

   </div>

    </div>
  )
}

export default Nav